import Image1 from "@//shared/assets/images/swiper/1.png"
import IconLeft from "@//shared/assets/images/swiper/chevron-left.svg"
import IconRight from "@//shared/assets/images/swiper/chevron-right.svg"
import { Box, Text } from "@mantine/core"
import cx from "clsx"
import React, { useEffect, useState } from "react"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {
	Autoplay,
	EffectCards,
	EffectCoverflow,
	EffectCreative,
	EffectCube,
	EffectFade,
	EffectFlip,
	Navigation,
	Pagination,
} from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./swiper.module.scss"

const tourSlides = [
	{
		id: 1,
		image: Image1,
		title: "8-day Uzbekistan Classic Tour",
		description:
			"Explore Uzbekistan, with its welcoming people, blue-domed minarets, mausoleums full of history, and local cuisines that have become inseparable from the cultures of Tashkent, Samarkand, Bukhara, and Khiva. Feel the charm of the East for yourself!",
	},
	{
		id: 2,
		image: Image1,
		title: "Ancient Cities of the Silk Road",
		description:
			"Journey through the historic Silk Road cities, experiencing the rich cultural heritage and architectural marvels of ancient civilizations.",
	},
	{
		id: 3,
		image: Image1,
		title: "Cultural Heritage Tour",
		description:
			"Immerse yourself in the vibrant traditions, crafts, and customs of Uzbekistan while exploring its most iconic landmarks.",
	},
]

export const SwiperCustom = () => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<div className={s.tourSlider}>
			<Swiper
				modules={[
					Navigation,
					Pagination,
					Autoplay,
					EffectFlip,
					EffectCards,
					EffectCoverflow,
					EffectCreative,
					EffectCube,
					EffectFade,
				]}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				pagination={{
					el: ".swiper-pagination",
					clickable: true,
					renderBullet: function (_, className) {
						return (
							`<span class="${className}">` +
							`<svg class="fp-arc-loader" width="20" height="20" viewBox="0 0 16 16">` +
							`<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"` +
							'stroke-opacity="1" stroke-width="1.5px"></circle>' +
							`<circle cx="8" cy="8" r="3" fill="#FFF"></circle>` +
							`</svg></span>`
						)
					},
				}}
				speed={1000}
				autoplay={{
					delay: 4000,
					waitForTransition: true,
					disableOnInteraction: false,
				}}
				loop
				flipEffect={{
					limitRotation: true,
					slideShadows: false,
				}}
				className={s.tourSwiper}
			>
				{tourSlides.map((slide) => (
					<SwiperSlide key={slide.id}>
						<div className={s.slideContent}>
							<div
								className={s.slideBackground}
								style={{ backgroundImage: `url(${slide.image.src})` }}
							/>
							<div className={s.slideOverlay}>
								<Text component={"h1"} className={s.slideOverlayTitle}>
									{slide.title}
								</Text>
								<Text component={"p"} className={s.slideOverlayDescription}>
									{slide.description}
								</Text>
								<FilledButton className={s.detailsButton}>Details</FilledButton>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="swiper-pagination"></div>
			<Box
				className={cx(
					s.swiperButton,
					s.swiperButtonRight,
					"swiper-button-next",
				)}
			>
				<IconLeft />
			</Box>
			<Box
				className={cx(s.swiperButton, s.swiperButtonLeft, "swiper-button-prev")}
			>
				<IconRight />
			</Box>
		</div>
	)
}
