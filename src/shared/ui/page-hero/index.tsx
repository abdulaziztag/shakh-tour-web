import { Box, Button, Container, Flex, Text } from "@mantine/core"
import useTranslation from "next-translate/useTranslation"
import React, { FC } from "react"

import s from "./page-hero.module.scss"

interface PageHeroProps {
	title: string
	description?: string
	descriptionNone?: boolean
	button?: boolean
}

export const PageHero: FC<PageHeroProps> = ({ title, description, button }) => {
	const { t } = useTranslation("common")
	return (
		<section className={s.pageHeroSection}>
			<Container size={"1440px"}>
				<Flex justify={"center"} align={"center"}>
					<Box className={s.pageHeroSectionRow}>
						<Text component={"h3"} className={s.pageHeroSectionTitle}>
							{title}
						</Text>
						<Text component={"p"} className={s.pageHeroSectionDescription}>
							{description}
						</Text>
						{button && (
							<Button className={s.pageHeroSectionButton}>
								{t("news_articles")}
							</Button>
						)}
					</Box>
				</Flex>
			</Container>
		</section>
	)
}
