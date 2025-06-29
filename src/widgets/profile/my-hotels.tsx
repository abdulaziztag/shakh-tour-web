import { Title } from "@mantine/core";
import { FC } from "react";

import HotelCardList from '../hotels-list';
import classes from "./profile.module.scss";

const MyTours: FC = () => {
	const staticHotels: any[] = [
		{
			id: "4F5A10OF",
			title: "Luxury Plaza Guesthouse",
			description: "2A, Mirzakalona Ismaili Street, Tashkent",
			features: [
				"Air conditioner",
				"Free wifi",
				"Private parking area",
				"Check-in from 14:00",
				"Check-out by 12:00",
			],
			startDate: "2023-04-15",
			endDate: "2023-04-15",
			imageUrl: "/images/samarkand-tower.jpg",
			imageAlt: "Luxury Plaza Guesthouse - street view",
			status: "under-review",
			labelDateStart: "Check-in from 14:00",
			labelDateEnd: "Check-out by 12:00",
		},
		{
			id: "4F5A10OF",
			title: "Luxury Plaza Guesthouse",
			description: "2A, Mirzakalona Ismaili Street, Tashkent",
			features: [
				"Air conditioner",
				"Free wifi",
				"Private parking area",
				"Check-in from 14:00",
				"Check-out by 12:00",
			],
			startDate: "2023-04-15",
			endDate: "2023-04-15",
			imageUrl: "/images/blue-dome.jpg",
			imageAlt: "Luxury Plaza Guesthouse - exterior view",
			status: "awaiting-payment",
			labelDateStart: "Check-in from 14:00",
			labelDateEnd: "Check-out by 12:00",
		},
		{
			id: "4F5A10OF",
			title: "Luxury Plaza Guesthouse",
			description: "2A, Mirzakalona Ismaili Street, Tashkent",
			features: [
				"Air conditioner",
				"Free wifi",
				"Private parking area",
				"Check-in from 14:00",
				"Check-out by 12:00",
			],
			startDate: "2023-04-15",
			endDate: "2023-04-15",
			imageUrl: "/images/ornate-ceiling.jpg",
			imageAlt: "Luxury Plaza Guesthouse - interior",
			status: "confirmed",
			labelDateStart: "Check-in from 14:00",
			labelDateEnd: "Check-out by 12:00",
		},
	]

	return (
		<div className={classes.tourMain}>
			<Title order={2} className={classes.pageTitle}>
				My Hotels
			</Title>
			<HotelCardList tours={staticHotels} />
		</div>
	)
}
export default MyTours