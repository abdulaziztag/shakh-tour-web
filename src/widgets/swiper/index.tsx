import { Box } from "@mantine/core"
import React from "react"

import Image1 from "@/shared/assets/images/swiper/1.png"
import { SwiperCustom } from "@/shared/ui"

import s from "./swiper.module.scss"

export const Swiper = () => {
	const tourSlides = [
		{
			id: 1,
			image: Image1,
			title: "8-day Uzbekistan Classic Tour",
			description:
				"Explore Uzbekistan, with its welcoming people, blue-domed minarets, mausoleums full of history, and local cuisines that have become inseparable from the cultures of Tashkent, Samarkand, Bukhara, and Khiva. Feel the charm of the East for yourself!",
			mobileData: {
				title: "8-day Uzbekistan Classic Tour",
				description:
					"Explore Uzbekistan, with its welcoming people, blue-domed minarets, mausoleums full of history, and local cuisines that have become inseparable from the cultures of Tashkent, Samarkand, Bukhara, and Khiva. Feel the charm of the East for yourself!",
			},
		},
		{
			id: 2,
			image: Image1,
			title: "Ancient Cities of the Silk Road",
			description:
				"Journey through the historic Silk Road cities, experiencing the rich cultural heritage and architectural marvels of ancient civilizations.",
			mobileData: {
				title: "Ancient Cities of the Silk Road",
				description:
					"Journey through the historic Silk Road cities, experiencing the rich cultural heritage and architectural marvels of ancient civilizations.",
			},
		},
		{
			id: 3,
			image: Image1,
			title: "Cultural Heritage Tour",
			description:
				"Immerse yourself in the vibrant traditions, crafts, and customs of Uzbekistan while exploring its most iconic landmarks.",
			mobileData: {
				title: "Cultural Heritage Tour",
				description:
					"Immerse yourself in the vibrant traditions, crafts, and customs of Uzbekistan while exploring its most iconic landmarks.",
			},
		},
	]

	return (
		<Box className={s.swiper}>
			<SwiperCustom tourSlides={tourSlides} />
		</Box>
	)
}
