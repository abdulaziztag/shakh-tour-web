import { AboutForm } from "@/feature"
import { Box, Container, SegmentedControl, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import s from "./about-services.module.scss"

export const AboutServices = () => {
	const data = [
		{
			id: 1,
			title: "Small tours",
		},
		{
			id: 2,
			title: "Peivate tours",
		},
		{
			id: 3,
			title: "Custom tours",
		},
	]

	return (
		<Box className={s.aboutServices}>
			<Container size={"1440px"}>
				<Text component={"h3"} className={cx("title", s.aboutServicesTitle)}>
					Our services
				</Text>
				<SegmentedControl
					data={data.map((item) => ({
						value: item.id.toString(),
						label: item.title,
					}))}
					radius={"2.5rem"}
					classNames={{
						label: s.segmentedControlLabel,
						indicator: s.segmentedControlIndicator,
						innerLabel: s.segmentedControlInnerLabel,
						control: s.segmentedControl,
						root: s.segmentedControlRoot,
					}}
				/>
				<AboutForm />
			</Container>
		</Box>
	)
}
