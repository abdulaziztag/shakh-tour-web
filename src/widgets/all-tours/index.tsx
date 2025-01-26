import { Box, Flex, Grid } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import { AllTourFilter, TourInfo } from "@/shared/ui"

import s from "./all-tours.module.scss"

export const AllTours = () => {
	const matches = useMediaQuery("(max-width: 992px)")
	return (
		<Box className={s.allTours}>
			<Grid>
				{!matches ? (
					<Grid.Col span={4}>
						<Box className={s.allTourLeft}>
							<AllTourFilter />
						</Box>
					</Grid.Col>
				) : null}
				<Grid.Col span={!matches ? 8 : 12}>
					<Flex gap={"1.5rem"} className={s.allToursCard}>
						{[1, 2, 3, 4, 5, 6, 7].map((index) => (
							<TourInfo key={index} />
						))}
					</Flex>
				</Grid.Col>
			</Grid>
		</Box>
	)
}
