import IconLeft from "@//shared/assets/images/swiper/chevron-left.svg"
import IconRight from "@//shared/assets/images/swiper/chevron-right.svg"
import { Box, Text } from "@mantine/core"
import cx from "clsx"
import React, { FC, useEffect, useState } from "react"
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
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./swiper.module.scss"
import { useRouter } from 'next/navigation'

interface SwiperCustomProps {
	tourSlides: {
		id: number
		image: { src: string }
		title: string
		description: string
		mobileData?: {
			title: string
			description: string
		}
	}[]
}

export const SwiperCustom: FC<SwiperCustomProps> = ({ tourSlides }) => {
	const [mounted, setMounted] = useState(false)
	const [activeIndex, setActiveIndex] = useState(0) // Состояние для активного слайда
	const swiper = useSwiper()
	const router = useRouter()

	const handleViewDetail = (hotelId: number) => {
		router.push(`/tours/${hotelId}`)
	} // Хук для доступа к Swiper

	useEffect(() => {
		setMounted(true)
	}, [])

	// Обновляем активный индекс при изменении слайда
	useEffect(() => {
		if (swiper) {
			swiper.on("realIndexChange", (swiperInstance) => {
				setActiveIndex(swiperInstance.realIndex) // Используем realIndex для поддержки loop
			})
		}

		// Очистка обработчика при размонтировании
		return () => {
			if (swiper) {
				swiper.off("realIndexChange")
			}
		}
	}, [swiper])

	if (!mounted) {
		return null
	}

	// Получаем mobileData для активного слайда
	const activeSlide = tourSlides[activeIndex]
	const mobileData = activeSlide?.mobileData

	return (
		<div>
			<Box className={s.tourSlider}>
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
					onRealIndexChange={(swiperInstance) =>
						setActiveIndex(swiperInstance.realIndex)
					} // Обновляем активный индекс
				>
					{tourSlides.map(({ id, image, title, description }) => (
						<SwiperSlide key={id}>
							<div className={s.slideContent}>
								<div
									className={s.slideBackground}
									style={{ backgroundImage: `url(${image.src})` }}
								/>
								<div className={s.slideOverlay}>
									<Text component={"h1"} className={s.slideOverlayTitle}>
										{title}
									</Text>
									<Text component={"p"} className={s.slideOverlayDescription}>
										{description}
									</Text>
									<FilledButton className={s.detailsButton} onClick={() => handleViewDetail(1)}>
										Details
									</FilledButton>
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
					className={cx(
						s.swiperButton,
						s.swiperButtonLeft,
						"swiper-button-prev",
					)}
				>
					<IconRight />
				</Box>
			</Box>

			{/* Мобильный блок для активного слайда */}
			{mobileData && (
				<div className={cx(s.slideOverlay, s.slideOverlayMobile)}>
					<Text component={"h1"} className={s.slideOverlayTitle}>
						{mobileData.title}
					</Text>
					<Text component={"p"} className={s.slideOverlayDescription}>
						{mobileData.description}
					</Text>
					<FilledButton className={s.detailsButton}>Details</FilledButton>
				</div>
			)}
		</div>
	)
}
