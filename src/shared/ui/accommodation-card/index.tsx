import { Box, Button, Card, Group, Stack, Text } from "@mantine/core"
import Image, { StaticImageData } from "next/image"

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
	return (
		<Card radius={24} className={styles.guestHouseCard} p={0}>
			<Group align="stretch" gap="32px" className={styles.cardContent}>
				<Box className={styles.imageSection}>
					<Image src={image} alt={title} fill className={styles.image} />
				</Box>
				<Box className={styles.contentSection} p={32} w={373}>
					<Stack className={styles.contentStack}>
						<Box className={styles.titleSection}>
							<Text
								size="xl"
								// weight={600}
								color="dark"
								className={styles.title}
							>
								{title}
							</Text>
							<Group align="center" className={styles.addressGroup}>
								<Text size="sm" color="dimmed" className={styles.address}>
									{address}
								</Text>
							</Group>
						</Box>

						<Group className={styles.amenitiesRow}>
							{hasAirConditioning && (
								<Group align="center" className={styles.amenityItem}>
									{/* <IconSnowflake size={16} className={styles.amenityIcon} /> */}
									<Text size="sm" color="dark">
										Air Conditioning
									</Text>
								</Group>
							)}
							{hasFreeWifi && (
								<Group align="center" className={styles.amenityItem}>
									{/* <IconWifi size={16} className={styles.amenityIcon} /> */}
									<Text size="sm" color="dark">
										Free Wi-Fi
									</Text>
								</Group>
							)}
						</Group>

						<Group className={styles.amenitiesRow}>
							{hasPrivateParking && (
								<Group align="center" className={styles.amenityItem}>
									{/* <IconInfoCircle size={16} className={styles.amenityIcon} /> */}
									<Text size="sm" color="dark">
										Private Parking Area
									</Text>
								</Group>
							)}
							{hasTransfer && (
								<Group align="center" className={styles.amenityItem}>
									{/* <IconCar size={16} className={styles.amenityIcon} /> */}
									<Text size="sm" color="dark">
										Transfer
									</Text>
								</Group>
							)}
						</Group>

						<Box className={styles.buttonSection}>
							<Button
								variant="filled"
								size="md"
								radius="md"
								className={styles.detailsButton}
							>
								See Details
							</Button>
						</Box>
					</Stack>
				</Box>
			</Group>
		</Card>
	)
}

export default GuestHouseCard
