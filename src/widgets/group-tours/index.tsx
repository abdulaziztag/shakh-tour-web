import { Badge, Box, Flex, Grid, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import IconCalendar from "@/shared/assets/images/calendar.svg"
import ImageBox1 from "@/shared/assets/images/group-tours/1.png"
import ImageBox2 from "@/shared/assets/images/group-tours/2.png"
import ImageBox3 from "@/shared/assets/images/group-tours/3.png"
import ImageBox4 from "@/shared/assets/images/group-tours/4.png"
import IconArrow from "@/shared/assets/images/group-tours/chevron-right.svg"
import IconLocation from "@/shared/assets/images/location.svg"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./group-tours.module.scss"

export const GroupTours = () => {
	return (
		<Box className={s.groupTours}>
			<Flex justify={"space-between"} align={"center"}>
				<Text component={"h2"} className={cx(s.groupToursTitle, "title")}>
					Our Handpicked Group Tours
				</Text>
				<Text component={"h2"} className={cx(s.groupToursRightTitle)}>
					All <IconArrow />
				</Text>
			</Flex>
			<Grid className={s.groupToursGrid}>
				<Grid.Col span={6}>
					<Box className={s.groupToursBox}>
						<Box className={s.groupToursBoxImage}>
							<Image src={ImageBox1} alt={""} width={644} height={260} />
						</Box>
						<Box className={s.groupToursBoxBody}>
							<Text component={"h3"} className={s.groupToursBoxBodyTitle}>
								From Samarkand to Tashkent: Discoveries and adventures tour
							</Text>
							<Text component={"p"} className={s.groupToursBoxBodyDescription}>
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
							<Flex justify={"space-between"} align={"center"}>
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
				<Grid.Col span={6}>
					<Box className={s.groupToursBox}>
						<Box className={s.groupToursBoxImage}>
							<Image src={ImageBox2} alt={""} width={644} height={260} />
						</Box>
						<Box className={s.groupToursBoxBody}>
							<Text component={"h3"} className={s.groupToursBoxBodyTitle}>
								From Samarkand to Tashkent: Discoveries and adventures tour
							</Text>
							<Text component={"p"} className={s.groupToursBoxBodyDescription}>
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
							<Flex justify={"space-between"} align={"center"}>
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
				<Grid.Col span={6}>
					<Box className={s.groupToursBox}>
						<Box className={s.groupToursBoxImage}>
							<Image src={ImageBox3} alt={""} width={644} height={260} />
						</Box>
						<Box className={s.groupToursBoxBody}>
							<Text component={"h3"} className={s.groupToursBoxBodyTitle}>
								From Samarkand to Tashkent: Discoveries and adventures tour
							</Text>
							<Text component={"p"} className={s.groupToursBoxBodyDescription}>
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
							<Flex justify={"space-between"} align={"center"}>
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
				<Grid.Col span={6}>
					<Box className={s.groupToursBox}>
						<Box className={s.groupToursBoxImage}>
							<Image src={ImageBox4} alt={""} width={644} height={260} />
						</Box>
						<Box className={s.groupToursBoxBody}>
							<Text component={"h3"} className={s.groupToursBoxBodyTitle}>
								From Samarkand to Tashkent: Discoveries and adventures tour
							</Text>
							<Text component={"p"} className={s.groupToursBoxBodyDescription}>
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
							<Flex justify={"space-between"} align={"center"}>
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
			</Grid>
		</Box>
	)
}
