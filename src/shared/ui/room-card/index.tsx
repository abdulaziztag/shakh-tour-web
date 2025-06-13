import {
	ActionIcon,
	Button,
	Card,
	Group,
	Image,
	Stack,
	Text,
} from "@mantine/core"
import { useState } from "react"

import IconX from "@/shared/assets/images/close.svg"
import IconCheck from "@/shared/assets/images/hotel-detail/check.svg"
import IconHeart from "@/shared/assets/images/hotel-detail/heart-fill.svg"

import styles from "./room-card.module.scss"
import formatAmount from '../../libs/format-amount';

export interface RoomCardProps {
	id: string
	images: string[]
	title: string
	subtitle: string
	price: number
	currency: string
	priceLabel: string
	features: {
		label: string
		available: boolean
	}[]
	buttonText: string
	onButtonClick?: (id: string) => void
	onFavoriteToggle?: (id: string, isFavorited: boolean) => void
	initialFavorited?: boolean
}

export const RoomCard: React.FC<RoomCardProps> = ({
	id,
	images,
	title,
	subtitle,
	price,
	currency,
	priceLabel,
	features,
	buttonText,
	onButtonClick,
	onFavoriteToggle,
	initialFavorited = false,
}) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [isFavorited, setIsFavorited] = useState(initialFavorited)

	const handleFavoriteClick = () => {
		const newFavoriteState = !isFavorited
		setIsFavorited(newFavoriteState)
		onFavoriteToggle?.(id, newFavoriteState)
	}

	const handleImageIndicatorClick = (index: number) => {
		setCurrentImageIndex(index)
	}

	const handleButtonClick = () => {
		onButtonClick?.(id)
	}

	return (
		<Card className={styles.roomCard} withBorder>
			<div className={styles.imageSection}>
				<div className={styles.imageContainer}>
					<Image
						src={images[currentImageIndex]}
						alt={title}
						height={200}
						fit="cover"
						className={styles.roomImage}
					/>

					<ActionIcon
						className={styles.favoriteButton}
						variant="filled"
						color="white"
						size="md"
						onClick={handleFavoriteClick}
					>
						{isFavorited ? (
							<IconHeart />
						) : (
							<IconHeart />
						)}
					</ActionIcon>

					{images.length > 1 && (
						<Group className={styles.imageIndicators} gap="xs">
							{images.map((_, index) => (
								<div
									key={index}
									className={`${styles.indicator} ${
										index === currentImageIndex ? styles.active : ""
									}`}
									onClick={() => handleImageIndicatorClick(index)}
								/>
							))}
						</Group>
					)}
				</div>
			</div>

			<Stack gap="sm" className={styles.content}>
				<div>
					<Text className={styles.title} fw={600} size="md">
						{title}
					</Text>
					<Text className={styles.subtitle} size="sm" c="dimmed">
						{subtitle}
					</Text>
				</div>

				<Group className={styles.priceGroup}>
					<Text className={styles.price}>
						{formatAmount(price)} {currency}
					</Text>
					<Text className={styles.priceLabel}>
						/ {priceLabel}
					</Text>
				</Group>

				<Stack gap="xs" className={styles.features}>
					{features.map((feature, index) => (
						<Group key={index} gap="xs" align="center">
							{feature.available ? (
								<IconCheck size={14} color="#10b981" />
							) : (
								<IconX  />
							)}
							<Text
								size="sm"
								c={feature.available ? "#000000" : "#97A0AD"}
								className={styles.featureText}
							>
								{feature.label}
							</Text>
						</Group>
					))}
				</Stack>

				<Button
					className={styles.actionButton}
					fullWidth
					onClick={handleButtonClick}
					variant="filled"
				>
					{buttonText}
				</Button>
			</Stack>
		</Card>
	)
}
