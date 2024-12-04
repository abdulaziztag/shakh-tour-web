import { Box } from "@mantine/core"
import React from "react"

import { SwiperCustom } from "@/shared/ui"

import s from "./swiper.module.scss"

export const Swiper = () => {
	return (
		<Box className={s.swiper}>
			<SwiperCustom />
		</Box>
	)
}
