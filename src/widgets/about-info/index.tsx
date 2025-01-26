import Image1 from "@//shared/assets/images/about/1.png"
import { Box, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import React from "react"

import s from "./about.module.scss"

export const AboutInfo = () => {
	const matches = useMediaQuery("(max-width: 845px)")
	return (
		<Box className={s.aboutInfoWrapper}>
			<Grid>
				<Grid.Col span={matches ? 12 : 6}>
					<Text component={"h2"} className={s.aboutTitle}>
						Our mission is to increase th GDP of your startup
					</Text>
					<Text component={"p"} className={s.aboutDescription}>
						Untitled is a technology company that builds infrastructure for your
						startup, so you don’t have to. Businesses of every size—from new
						startups to public companies—use our software to manage their
						businesses.
					</Text>
				</Grid.Col>
				<Grid.Col span={matches ? 12 : 6}>
					<Box className={s.aboutImage}>
						<Image src={Image1} alt={""} width={624} height={397} />
					</Box>
				</Grid.Col>
			</Grid>
		</Box>
	)
}
