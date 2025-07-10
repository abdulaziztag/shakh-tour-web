import { Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import BannerMobile from "@/shared/assets/images/banner/1.png"

import s from "./banner.module.scss"
import { useRouter } from 'next/navigation'

export const Banner = () => {
	const router = useRouter();
	return (
		<Box className={s.banner}>
			<Flex justify={"center"} align={"center"}>
				<Image
					src={BannerMobile}
					alt={""}
					width={313}
					height={185}
					className={s.bannerImage}
				/>
			</Flex>
			<Flex className={s.bannerBody}>
				<Text component={"h3"} className={cx(s.bannerTitle, "title")}>
					Your perfect adventure starts here! Get in touch with us!
				</Text>
				<Text component={"p"} className={cx(s.bannerSubTitle)}>
					We are delighted to assist you in organising an unforgettable journey!
					Our team of experts offers a wide range of tours that suit any budget
					and preferences.
				</Text>
				<Button className={s.bannerButton} onClick={() => router.push('/contact-us')}>Get in touch with us</Button>
			</Flex>
		</Box>
	)
}
