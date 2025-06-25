import { Badge, Box, Card, Flex, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";



import Image1 from "@/shared/assets/images/all-tours/1.png";



import styles from "./tour-list.module.scss";





export interface TourCardProps {
	id: string
	title: string
	description: string
	startDate: string
	endDate: string
	imageUrl: string
	imageAlt: string
	status: "under-review" | "awaiting-payment" | "confirmed"
}

export interface TourCardStatus {
	label: string
	color: "orange" | "blue" | "green" | string;
	variant: "light" | "filled" | "outline"
}

const TourCard: React.FC<TourCardProps> = ({
	id,
	title,
	description,
	startDate,
	endDate,
	imageUrl,
	imageAlt,
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
			<Flex gap="lg" align="stretch">
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
						<Group justify="space-between" align="flex-start">
							<Text
								fw={600}
								size="lg"
								className={styles.cardTitle}
								lineClamp={2}
							>
								{title}
							</Text>
						</Group>

						<Text
							size="sm"
							c="dimmed"
							className={styles.cardDescription}
							lineClamp={2}
						>
							{description}
						</Text>

						<Box className={styles.dateSection} mt="auto">
							<Group justify="space-between" align="center">
								<Group gap="xl">
									<Stack gap={2}>
										<Text className={styles.cardStartEnd}>
											Start
										</Text>
										<Text className={styles.cardStartDate}>
											{formatDate(startDate)}
										</Text>
									</Stack>

									<Stack gap={2}>
										<Text className={styles.cardStartEnd}>
											End
										</Text>
										<Text className={styles.cardStartDate}>
											{formatDate(endDate)}
										</Text>
									</Stack>
								</Group>

								<Group>
									<Text size="xs" c="dimmed" className={styles.cardId}>
										ID {id}
									</Text>
									<Badge
										color={statusConfig.color}
										variant={statusConfig.variant}
										className={styles.statusBadge}
									>
										{statusConfig.label}
									</Badge>
								</Group>
							</Group>
						</Box>
					</Stack>
				</Box>
			</Flex>
		</Card>
	)
}

export default TourCard