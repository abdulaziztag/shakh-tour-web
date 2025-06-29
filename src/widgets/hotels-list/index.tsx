import { SimpleGrid } from "@mantine/core"
import React from "react"

import TourCard from "@/shared/ui/tour-list-card/index"
import { TourCardProps } from "@/shared/ui/tour-list-card/index"

import styles from "./hotels-list.module.scss"

interface TourCardListProps {
	tours: TourCardProps[]
	cols?: { base: number; sm?: number; md?: number; lg?: number }
	spacing?: string | number
	containerSize?: string | number
	className?: string
}

const HotelCardList: React.FC<TourCardListProps> = ({
	tours,
	cols = { base: 1, sm: 1, md: 1 },
	spacing = "lg",
}) => {
	return (
		<SimpleGrid cols={cols} spacing={spacing} className={styles.tourGrid}>
			{tours.map((tour, index) => (
				<TourCard key={`${tour.id}-${index}`} {...tour} features/>
			))}
		</SimpleGrid>
	)
}

export default HotelCardList
