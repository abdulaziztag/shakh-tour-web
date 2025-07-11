import { Card, Group, Rating, Text, Title } from "@mantine/core"
import { FC, useEffect } from "react"

import styles from "./review-card.module.scss"

export interface ReviewCardProps {
	name: string
	title: string
	content: string
	shares: number
	rating: number
}

export const ReviewCard: FC<ReviewCardProps> = ({
	name,
	title,
	content,
	shares,
	rating,
}) => {
	useEffect(() => {
		console.log(shares)
	}, [])

	return (
		<Card className={styles.reviewCard} shadow="sm" radius="md" withBorder>
			<Group justify="space-between" align="flex-start" mb="md">
				<Group gap="sm" align="center">
					<Text fw={700} size="lg" className={styles.name}>
						{name}
					</Text>
				</Group>
				<Rating value={rating} readOnly size="sm" />
			</Group>
			<Title order={4} className={styles.title}>
				{title}
			</Title>
			<Text className={styles.content}>{content}</Text>
		</Card>
	)
}
