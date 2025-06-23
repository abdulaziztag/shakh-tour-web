import { Text, Title } from "@mantine/core"
import { FC, useState } from "react"

import { RecommendedHotels } from "@/shared/ui"

import classes from "./profile.module.scss"

const MyHotels: FC = () => {
	const [hotels] = useState([
		{
			id: 1,
			name: "Grand Plaza Hotel",
			location: "Tashkent",
			checkIn: "2024-07-15",
			checkOut: "2024-07-17",
			status: "Confirmed",
			price: "$120/night",
		},
		{
			id: 2,
			name: "Silk Road Lodge",
			location: "Samarkand",
			checkIn: "2024-08-20",
			checkOut: "2024-08-22",
			status: "Pending",
			price: "$85/night",
		},
	])

	return (
		<div className={classes.pageContent}>
			<Title order={2} className={classes.pageTitle}>
				My Hotels
			</Title>

			<div className={classes.hotelsGrid}>
				{/* {hotels.map((hotel) => (
					<div key={hotel.id} className={classes.hotelCard}>
						<div className={classes.hotelHeader}>
							<Title order={4} className={classes.hotelName}>
								{hotel.name}
							</Title>
							<span
								className={`${classes.status} ${classes[hotel.status.toLowerCase()]}`}
							>
								{hotel.status}
							</span>
						</div>
						<div className={classes.hotelDetails}>
							<Text className={classes.hotelLocation}>
								Location: {hotel.location}
							</Text>
							<Text className={classes.hotelDates}>
								Check-in: {hotel.checkIn} | Check-out: {hotel.checkOut}
							</Text>
							<Text className={classes.hotelPrice}>Price: {hotel.price}</Text>
						</div>
						<div className={classes.hotelActions}>
							<button className={classes.viewButton}>View Booking</button>
							{hotel.status === "Confirmed" && (
								<button className={classes.modifyButton}>Modify</button>
							)}
						</div>
					</div>
				))} */}
				<RecommendedHotels
					onViewDetail={() => {}}
					titleButton={"See details"}
					viewButton
					m={"0"}
					p={"0"}
				/>
			</div>
		</div>
	)
}
export default MyHotels
