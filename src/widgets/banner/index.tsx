import { Box, Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import s from "./banner.module.scss"

export const Banner = () => {
	return (
		<Box className={s.banner}>
			<Flex className={s.bannerBody}>
				<Text component={"h3"} className={cx(s.bannerTitle, "title")}>
					Your perfect adventure starts here! Get in touch with us!
				</Text>
				<Text component={"p"} className={cx(s.bannerSubTitle)}>
					We are delighted to assist you in organising an unforgettable journey!
					Our team of experts offers a wide range of tours that suit any budget
					and preferences.
				</Text>
				<Button className={s.bannerButton}>Get in touch with us</Button>
			</Flex>
		</Box>
	)
}
