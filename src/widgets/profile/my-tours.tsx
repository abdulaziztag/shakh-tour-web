import { Title } from "@mantine/core";
import { FC } from "react";

import TourCardList from '../tour-list';
import classes from "./profile.module.scss";

const MyTours: FC = () => {
	const staticTours: any[] = [
		{
			id: "4F5A100F",
			title: "From Samarkand to Tashkent: Secrets and Adventures Tour",
			description:
				"The Charm of Uzbekistan in one big trip all around Uzbekistan at 10 days you can see the most popular places to go",
			startDate: "2023-04-15",
			endDate: "2023-04-15",
			imageUrl: "/images/samarkand-tower.jpg",
			imageAlt: "Historic minaret in Samarkand",
			status: "under-review",
		},
		{
			id: "4F5A100F",
			title: "From Samarkand to Tashkent: Secrets and Adventures Tour",
			description:
				"The Charm of Uzbekistan in one big trip all around Uzbekistan at 10 days you can see the most popular places to go",
			startDate: "2023-04-15",
			endDate: "2023-04-15",
			imageUrl: "/images/blue-dome.jpg",
			imageAlt: "Beautiful blue dome architecture",
			status: "awaiting-payment",
		},
		{
			id: "4F5A100F",
			title: "From Samarkand to Tashkent: Secrets and Adventures Tour",
			description:
				"The Charm of Uzbekistan in one big trip all around Uzbekistan at 10 days you can see the most popular places to go",
			startDate: "2023-04-15",
			endDate: "2023-04-15",
			imageUrl: "/images/ornate-ceiling.jpg",
			imageAlt: "Traditional ornate ceiling decoration",
			status: "confirmed",
		},
	]
	return (
		<div className={classes.tourMain}>
			<Title order={2} className={classes.pageTitle}>
				My Tours
			</Title>
			<TourCardList tours={staticTours} />
		</div>
	)
}
export default MyTours