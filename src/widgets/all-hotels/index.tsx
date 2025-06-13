import { Box, Grid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";



import { AllHotelFilter, RecommendedHotels } from "@/shared/ui";



import s from "./all-hotels.module.scss";
import { useRouter } from 'next/navigation';





export const AllHotels = () => {
	const matches = useMediaQuery("(max-width: 992px)")
	const router = useRouter()

	const handleViewDetail = (hotelId: number) => {
		router.push(`/hotels/${hotelId}`)
	}
	return (
		<>
			<Box className={s.allHotels}>
				<Grid>
					{!matches ? (
						<Grid.Col span={4}>
							<Box className={s.allTourLeft}>
								<AllHotelFilter />
							</Box>
						</Grid.Col>
					) : null}
					<Grid.Col span={!matches ? 8 : 12}>
						<RecommendedHotels onViewDetail={handleViewDetail}  titleButton={"View details"} m={"0"} p={"0"} />
					</Grid.Col>
				</Grid>
			</Box>
		</>
	)
}