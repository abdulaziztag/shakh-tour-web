import { Title, Text } from "@mantine/core"
import { FC, useState } from "react"

import classes from "./profile.module.scss"

const MyTours: FC = () => {
	const [tours] = useState([
		{
			id: 1,
			title: "Samarkand Historical Tour",
			date: "2024-07-15",
			status: "Completed",
			price: "$150",
		},
		{
			id: 2,
			title: "Bukhara Adventure",
			date: "2024-08-20",
			status: "Upcoming",
			price: "$200",
		},
		{
			id: 3,
			title: "Tashkent City Tour",
			date: "2024-06-10",
			status: "Completed",
			price: "$100",
		},
	])

	return (
		<div className={classes.pageContent}>
			<Title order={2} className={classes.pageTitle}>
				My Tours
			</Title>

			<div className={classes.toursGrid}>
				{tours.map((tour) => (
					<div key={tour.id} className={classes.tourCard}>
						<div className={classes.tourHeader}>
							<Title order={4} className={classes.tourTitle}>
								{tour.title}
							</Title>
							<span
								className={`${classes.status} ${classes[tour.status.toLowerCase()]}`}
							>
								{tour.status}
							</span>
						</div>
						<div className={classes.tourDetails}>
							<Text className={classes.tourDate}>Date: {tour.date}</Text>
							<Text className={classes.tourPrice}>Price: {tour.price}</Text>
						</div>
						<div className={classes.tourActions}>
							<button className={classes.viewButton}>View Details</button>
							{tour.status === "Upcoming" && (
								<button className={classes.cancelButton}>Cancel</button>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default MyTours
