import { Box, Card, Group, Stack, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image, { StaticImageData } from "next/image"

import Icon1 from "@/shared/assets/images/recommended-hotels/1.svg"
import Icon2 from "@/shared/assets/images/recommended-hotels/2.svg"
import Icon3 from "@/shared/assets/images/recommended-hotels/3.svg"

import { FilledButton } from "../buttons"
import styles from "./accommodation-card.module.scss"

interface GuestHouseCardProps {
	title?: string
	address?: string
	image?: StaticImageData
	hasAirConditioning?: boolean
	hasFreeWifi?: boolean
	hasPrivateParking?: boolean
	hasTransfer?: boolean
}

const GuestHouseCard: React.FC<GuestHouseCardProps> = ({
	title = "Reval Guesthouse",
	address = "2A Mirzakalon Ismoil Street, Tashkent",
	image = "/api/placeholder/300/267",
	hasAirConditioning = true,
	hasFreeWifi = true,
	hasPrivateParking = true,
	hasTransfer = true,
}) => {
	const isMobile = useMediaQuery("(max-width: 768px)")

	return (
		<Card radius={24} className={styles.guestHouseCard} p={0}>
			<Group align="stretch" gap={0} className={styles.cardContent}>
				<Box className={styles.imageSection}>
					<Image src={image} alt={title} fill className={styles.image} />
				</Box>
				<Box className={styles.contentSection} w={isMobile ? "100%" : 420}>
					<Stack className={styles.contentStack} gap={0}>
						<Box className={styles.titleSection}>
							<Text className={styles.title}>{title}</Text>
							<Group align="center" className={styles.addressGroup}>
								<Text className={styles.address}>{address}</Text>
							</Group>
						</Box>

						<div className={styles.amenitiesContainer}>
							{hasAirConditioning && (
								<Group align="center" className={styles.amenityItem}>
									<Icon1 />
									<Text size="sm">Air Conditioning</Text>
								</Group>
							)}

							{hasFreeWifi && (
								<Group align="center" className={styles.amenityItem}>
									<Icon2 />
									<Text size="sm">Free Wi-Fi</Text>
								</Group>
							)}

							{hasPrivateParking && (
								<Group align="center" className={styles.amenityItem}>
									<Icon3 />
									<Text size="sm">Private Parking Area</Text>
								</Group>
							)}

							{hasTransfer && (
								<Group align="center" className={styles.amenityItem}>
									<Icon3 />
									<Text size="sm">Transfer</Text>
								</Group>
							)}
						</div>
						<Box
							w="100%"
							style={{
								display: "flex",
								justifyContent: isMobile ? "center" : "flex-end",
								marginTop: "auto",
							}}
						>
							<FilledButton className={styles.detailsButton}>
								See Details
							</FilledButton>
						</Box>
					</Stack>
				</Box>
			</Group>
		</Card>
	)
}

export default GuestHouseCard
