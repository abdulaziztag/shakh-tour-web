import { Badge, Box, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import Image1 from "@/shared/assets/images/all-tours/1.png"
import IconCalendar from "@/shared/assets/images/calendar.svg"
import IconArrow from "@/shared/assets/images/group-tours/chevron-right.svg"
import IconLocation from "@/shared/assets/images/location.svg"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./tour-info.module.scss"

export const TourInfo = () => {
	const router = useRouter()
	
		const handleViewDetail = (hotelId: number) => {
			router.push(`/tours/${hotelId}`)
		}
	return (
		<>
			<Flex className={s.tourInfoMobileTopBox}>
				<Flex justify={"space-between"}>
					<Text className={s.tourInfoMobileTitle}>
						Our Handpicked Group Tours
					</Text>
					<IconArrow />
				</Flex>
			</Flex>

			<Box className={s.allToursRight}>
				<Box className={s.allToursRightImage}>
					<Image src={Image1} alt={"Tour"} width={250} height={312} />
				</Box>
				<Box className={s.allToursRightInfo}>
					<Text component={"h3"} className={s.allToursRightInfoTitle}>
						From Samarkand to Tashkent: Secrets and Adventures Tour
					</Text>
					<Text component={"p"} className={s.allToursRightInfoDescription}>
						The Charm of Uzbekistan in one big trip all around Uzbekistan at 10
						days you can see the most popular places to go
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
					<Flex justify={"space-between"} align={"center"} w={"100%"}>
						<Flex
							direction={"column"}
							gap={""}
							className={s.groupToursBoxBodyInfoItem}
						>
							<Text component={"p"} className={s.groupToursBoxBodyPrice}>
								$ 2,750 USD{" "}
								<span className={s.groupToursBoxBodyPriceSubTitle}>
									/ Price from
								</span>
							</Text>
						</Flex>
						<Flex
							className={cx(
								s.groupToursBoxBodyInfoItem,
								s.groupToursBoxBodyInfoItemMobile,
							)}
						>
							<FilledButton className={s.groupToursBoxBodyButton} onClick={() => handleViewDetail(1)}>
								See details
							</FilledButton>
						</Flex>
					</Flex>
				</Box>
			</Box>
		</>
	)
}
