import { Center, SimpleGrid, Stack, Text } from "@mantine/core"
import React from "react"

import TourCard from "@/shared/ui/tour-list-card/index"

import { TourCardProps } from "@/shared/ui/tour-list-card/index"
import styles from "./tour-list.module.scss"

interface TourCardListProps {
	tours: TourCardProps[]
	cols?: { base: number; sm?: number; md?: number; lg?: number }
	spacing?: string | number
	containerSize?: string | number
	className?: string
}

const TourCardList: React.FC<TourCardListProps> = ({
	tours,
	cols = { base: 1, sm: 1, md: 1 },
	spacing = "lg",
}) => {
	if (!tours || tours.length === 0) {
		return (
			// <Container size={containerSize} className={className}>
				<Center className={styles.emptyState}>
					<Stack align="center" gap="sm">
						<Text size="lg" fw={500} c="dimmed">
							No tours available
						</Text>
						<Text size="sm" c="dimmed">
							Check back later for new tour packages
						</Text>
					</Stack>
				</Center>
			// </Container>
		)
	}

	return (
		// <Container size={containerSize} className={className}>
			<SimpleGrid cols={cols} spacing={spacing} className={styles.tourGrid}>
				{tours.map((tour, index) => (
					<TourCard key={`${tour.id}-${index}`} {...tour} />
				))}
			</SimpleGrid>
		// </Container>
	)
}

export default TourCardList
