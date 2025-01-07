import { ActionIcon, Box, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React, { FC } from "react"

import Icon1 from "@/shared/assets/images/recommended-hotels/1.svg"
import Icon2 from "@/shared/assets/images/recommended-hotels/2.svg"
import Icon3 from "@/shared/assets/images/recommended-hotels/3.svg"
import Icon4 from "@/shared/assets/images/recommended-hotels/4.svg"
import IconLike from "@/shared/assets/images/recommended-hotels/heart-fill.svg"
import Image1 from "@/shared/assets/images/recommended-hotels/image.png"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./recommended-hotels.module.scss"

interface IRecommendedHotelsIProps {
	seeButton?: boolean
	title?: boolean
	like?: boolean
	viewButton?: boolean
	titleButton?: string
	m?: string
	p?: string
}

export const RecommendedHotels: FC<IRecommendedHotelsIProps> = ({
	seeButton,
	title,
	like,
	viewButton,
	titleButton,
	m,
	p,
}) => {
	return (
		<Box className={s.recommendedHotels} p={p}>
			{title && (
				<Text
					component={"h2"}
					className={cx(s.recommendedHotelsTitle, "title")}
				>
					Recommended Hotels
				</Text>
			)}
			<Box className={s.recommendedHotelsBox} m={m}>
				{[1, 2, 3, 4].map((_, index) => (
					<Box key={index} className={s.recommendedHotelsBoxItem}>
						<Box className={s.recommendedHotelsBoxItemImage}>
							<Image src={Image1} alt={""} width={366} height={215} />
							{like && (
								<ActionIcon className={s.recommendedHotelsBoxItemImageLike}>
									<IconLike />
								</ActionIcon>
							)}
						</Box>
						<Box className={s.recommendedHotelsBoxItemBody}>
							<Flex direction={"column"}>
								<Text
									component={"h3"}
									className={s.recommendedHotelsBoxItemBodyTitle}
								>
									Bentley Tashkent Hotel
								</Text>
								<Text
									component={"p"}
									className={s.recommendedHotelsBoxItemBodySubTitle}
								>
									2A Mirzakalona Ismaili Street, Tashkent
								</Text>
								<Flex gap={"1.5rem"}>
									<Text
										component={"p"}
										className={s.recommendedHotelsBoxItemBodyInfo}
									>
										<Icon1 />
										Air conditioning
									</Text>
									<Text
										component={"p"}
										className={s.recommendedHotelsBoxItemBodyInfo}
									>
										<Icon2 />
										Free wifi
									</Text>
									<Text
										component={"p"}
										className={s.recommendedHotelsBoxItemBodyInfo}
									>
										<Icon3 />
										Private parking area
									</Text>
									<Text
										component={"p"}
										className={s.recommendedHotelsBoxItemBodyInfo}
									>
										<Icon4 />
										Transfer
									</Text>
								</Flex>
							</Flex>
							<Flex gap={"1rem"}>
								<Box className={s.recommendedHotelsBoxItemBodyPriceLeft}>
									<Text className={s.recommendedHotelsBoxItemBodyPrice}>
										$199.5 USD
									</Text>
									<Text className={s.recommendedHotelsBoxItemBodyPriceInfo}>
										Payment per day
									</Text>
								</Box>
								<Box className={s.recommendedHotelsBoxItemBodyPriceRight}>
									{viewButton && (
										<OutlineButton fullWidth className={s.button}>
											View on the map
										</OutlineButton>
									)}
									<FilledButton fullWidth className={s.button}>
										{titleButton}
									</FilledButton>
								</Box>
							</Flex>
						</Box>
					</Box>
				))}
			</Box>
			{seeButton && (
				<Flex justify={"center"} mt={"2rem"}>
					<FilledButton className={s.recommendedHotelsBottomButton}>
						See
					</FilledButton>
				</Flex>
			)}
		</Box>
	)
}
