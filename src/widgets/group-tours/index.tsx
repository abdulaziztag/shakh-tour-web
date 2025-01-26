import { Badge, Box, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import IconCalendar from "@/shared/assets/images/calendar.svg"
import ImageBox1 from "@/shared/assets/images/group-tours/1.png"
import IconArrow from "@/shared/assets/images/group-tours/chevron-right.svg"
import IconLocation from "@/shared/assets/images/location.svg"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./group-tours.module.scss"

export const GroupTours = () => {
	const matches = useMediaQuery("(max-width: 768px)")
	const matchesIpad = useMediaQuery("(max-width: 845px)")

	return (
		<Box className={s.groupTours}>
			<Flex justify={"space-between"} align={"center"}>
				<Text component={"h2"} className={cx(s.groupToursTitle, "title")}>
					Our Handpicked Group Tours
				</Text>
				<Text component={"h2"} className={cx(s.groupToursRightTitle)}>
					<span>All</span> <IconArrow />
				</Text>
			</Flex>
			<Grid className={s.groupToursGrid}>
				{[1, 2, 3, 4].map((_, index) => (
					<Grid.Col span={matches ? 12 : 6} key={index}>
						<Box className={s.groupToursBox}>
							<Box className={s.groupToursBoxImage}>
								<Image src={ImageBox1} alt={""} width={644} height={260} />
							</Box>
							<Box className={s.groupToursBoxBody}>
								<Text component={"h3"} className={s.groupToursBoxBodyTitle}>
									From Samarkand to Tashkent: Discoveries and adventures tour
								</Text>
								<Text
									component={"p"}
									className={s.groupToursBoxBodyDescription}
								>
									Explore Uzbekistan, with its welcoming people, blue-domed
									minarets, mausoleums full of history, and local cuisines that
									have become inseparable from the cultures of Tashkent,
									Samarkand, Bukhara, and Khiva. Feel the charm of the East for
									yourself!
								</Text>
								<Flex className={s.groupToursBoxBodyBadge}>
									<Badge
										leftSection={<IconLocation />}
										classNames={{
											root: s.groupToursBoxBadge,
										}}
									>
										Tashkent, Bukhara, Samarkand, Khiva
									</Badge>
									<Badge
										leftSection={<IconCalendar />}
										classNames={{
											root: s.groupToursBoxBadge,
										}}
									>
										10 days
									</Badge>
								</Flex>
								<Flex
									justify={"space-between"}
									align={"center"}
									className={s.groupToursBoxBodyInfoItemWrapper}
								>
									<Flex
										direction={"column"}
										gap={""}
										className={s.groupToursBoxBodyInfoItem}
									>
										<Text component={"p"} className={s.groupToursBoxBodyPrice}>
											$ 2,750 USD
										</Text>
										<Text
											component={"p"}
											className={s.groupToursBoxBodyPriceSubTitle}
										>
											Starting from
										</Text>
									</Flex>
									<Flex className={s.groupToursBoxBodyInfoItem}>
										<FilledButton className={s.groupToursBoxBodyButton}>
											See details
										</FilledButton>
									</Flex>
								</Flex>
							</Box>
						</Box>
					</Grid.Col>
				))}
			</Grid>
			{matchesIpad ? (
				<Flex>
					<OutlineButton fullWidth mt={"1rem"} h={"2.5rem"}>
						See more
					</OutlineButton>
				</Flex>
			) : null}
		</Box>
	)
}
