import { Badge, Box, Card, Flex, Stack, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import Image1 from "@/shared/assets/images/all-tours/1.png"
import Icon1 from "@/shared/assets/images/recommended-hotels/1.svg"
import Icon2 from "@/shared/assets/images/recommended-hotels/2.svg"
import Icon3 from "@/shared/assets/images/recommended-hotels/3.svg"

// import Icon4 from "@/shared/assets/images/recommended-hotels/4.svg"

import styles from "./tour-list.module.scss"

// import VisaLabelIcon from '@/shared/assets/images/logos_visa.svg';

export interface TourCardProps {
	id: string
	title: string
	description: string
	startDate: string
	endDate: string
	imageUrl: string
	imageAlt: string
	features: boolean
	labelDateStart: string
	labelDateEnd: string
	status: "under-review" | "awaiting-payment" | "confirmed"
}

export interface TourCardStatus {
	label: string
	color: "orange" | "blue" | "green" | string
	variant: "light" | "filled" | "outline"
}

const TourCard: React.FC<TourCardProps> = ({
	id,
	title,
	description,
	startDate,
	endDate,
	// imageUrl,
	// imageAlt,
	labelDateEnd,
	labelDateStart,
	features,
	status,
}) => {
	const getStatusConfig = (status: TourCardProps["status"]): TourCardStatus => {
		const statusConfigs: Record<TourCardProps["status"], TourCardStatus> = {
			"under-review": {
				label: "Under Review",
				color: "#FF4405",
				variant: "light",
			},
			"awaiting-payment": {
				label: "Awaiting Payment",
				color: "#FAC515",
				variant: "light",
			},
			confirmed: {
				label: "Confirmed",
				color: "#16B364",
				variant: "light",
			},
		}

		return statusConfigs[status]
	}

	const statusConfig = getStatusConfig(status)

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString)
		return date.toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "long",
			year: "numeric",
		})
	}

	return (
		<Card padding="0px" className={styles.tourCard}>
			<Box className={styles.cardImage}>
				<Image
					src={Image1}
					alt="Tour image"
					fill
					style={{ objectFit: "cover" }}
				/>
			</Box>
			<Box className={styles.contentSection}>
				<Stack gap="sm" h="100%">
					<Text className={styles.cardTitle}>{title}</Text>

					<Text className={styles.cardDescription}>{description}</Text>

					{features && (
						<Flex className={styles.recommendedHotelsBoxItemBodyInfoWrapper}>
							<Text
								component="p"
								className={styles.recommendedHotelsBoxItemBodyInfo}
							>
								<Icon1 />
								<span>Air conditioning</span>
							</Text>
							<Text
								component="p"
								className={styles.recommendedHotelsBoxItemBodyInfo}
							>
								<Icon2 />
								<span>Free wifi</span>
							</Text>
							<Text
								component="p"
								className={styles.recommendedHotelsBoxItemBodyInfo}
							>
								<Icon3 />
								<span>Private parking area</span>
							</Text>
						</Flex>
					)}

					<Box className={styles.dateSection}>
						<div className={styles.dateGroup}>
							<div className={styles.datesContainer}>
								<div className={styles.dateItem}>
									<Text className={styles.cardStartEnd}>{labelDateStart}</Text>
									<Text className={styles.cardStartDate}>
										{formatDate(startDate)}
									</Text>
								</div>
								<div className={styles.dateItem}>
									<Text className={styles.cardStartEnd}>{labelDateEnd}</Text>
									<Text className={styles.cardStartDate}>
										{formatDate(endDate)}
									</Text>
								</div>
							</div>

							<div className={styles.statusContainer}>
								<Text className={styles.cardId}>ID {id}</Text>
								<Badge
									color={statusConfig.color}
									variant={statusConfig.variant}
									className={styles.statusBadge}
								>
									{statusConfig.label}
								</Badge>
							</div>
						</div>
					</Box>
				</Stack>
			</Box>
		</Card>
	)
}

export default TourCard
