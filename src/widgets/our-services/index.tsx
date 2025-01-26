import IconBox1 from "@//shared/assets/images/our-services/1.svg"
import IconBox2 from "@//shared/assets/images/our-services/2.svg"
import IconBox3 from "@//shared/assets/images/our-services/3.svg"
import IconBox4 from "@//shared/assets/images/our-services/4.svg"
import IconBox5 from "@//shared/assets/images/our-services/5.svg"
import IconArrowLeft from "@//shared/assets/images/our-services/chevron_left.svg"
import IconArrowRight from "@//shared/assets/images/our-services/chevron_right.svg"
import { ActionIcon, Box, Flex, Grid, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import s from "./our-services.module.scss"

export const OurServices = () => {
	const ourServices = [
		{
			title: "Tours & Excursion",
			description:
				"We guarantee competitive prices for all destinations and tours.",
			icon: IconBox1,
		},
		{
			title: "Best hotels",
			description: "Early booking can save up to 30%.",
			icon: IconBox2,
		},
		{
			title: "Air & Train Tickets",
			description:
				"We recommend hotels with a proven reputation and excellent reviews.",
			icon: IconBox3,
		},
		{
			title: "Visa Support",
			description:
				"We recommend hotels with a proven reputation and excellent reviews.",
			icon: IconBox4,
		},
		{
			title: "Transports",
			description: "We offer only the most interesting and proven tours.",
			icon: IconBox5,
		},
		{
			title: "Tours & Excursion",
			description:
				"We guarantee competitive prices for all destinations and tours.",
			icon: IconBox1,
		},
		{
			title: "Best hotels",
			description: "Early booking can save up to 30%.",
			icon: IconBox2,
		},
		{
			title: "Air & Train Tickets",
			description:
				"We recommend hotels with a proven reputation and excellent reviews.",
			icon: IconBox3,
		},
		{
			title: "Visa Support",
			description:
				"We recommend hotels with a proven reputation and excellent reviews.",
			icon: IconBox4,
		},
		{
			title: "Transports",
			description: "We offer only the most interesting and proven tours.",
			icon: IconBox5,
		},
	]

	return (
		<Box className={s.ourServices}>
			<Flex justify={"space-between"} align={"center"}>
				<Text component={"h2"} className={s.ourServicesTitle}>
					Our Services
				</Text>
				<Flex className={s.ourServicesButton}>
					<ActionIcon bg={"transparent"} className={cx("swiper-services-prev")}>
						<IconArrowLeft />
					</ActionIcon>
					<ActionIcon bg={"transparent"} className={cx("swiper-services-next")}>
						<IconArrowRight />
					</ActionIcon>
				</Flex>
			</Flex>
			{/* Desktop da slider */}
			<Swiper
				modules={[Navigation]}
				navigation={{
					nextEl: ".swiper-services-next",
					prevEl: ".swiper-services-prev",
				}}
				loop
				slidesPerView={5}
				spaceBetween={16}
				className={s.ourServicesSwiper}
			>
				{ourServices.map((service, index) => (
					<SwiperSlide key={index}>
						<Box className={s.ourServicesBox}>
							<Text component={"h3"} className={s.ourServicesBoxTitle}>
								{service.title}
							</Text>
							<Text component={"p"} className={s.ourServicesBoxDescription}>
								{service.description}
							</Text>
							<Box className={s.ourServicesBoxBottom}>
								<service.icon />
							</Box>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
			{/* Mobile */}
			<Grid className={s.ourServicesSwiperMobile}>
				{ourServices.map((service, index) => (
					<Grid.Col span={6}>
						<Box key={index} className={s.ourServicesBox}>
							<Text component={"h3"} className={s.ourServicesBoxTitle}>
								{service.title}
							</Text>
							<Text component={"p"} className={s.ourServicesBoxDescription}>
								{service.description}
							</Text>
							<Box className={s.ourServicesBoxBottom}>
								<service.icon />
							</Box>
						</Box>
					</Grid.Col>
				))}
			</Grid>
		</Box>
	)
}
