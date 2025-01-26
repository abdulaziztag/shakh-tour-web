import { Box, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import Image1 from "@/shared/assets/images/send-inquiry/1.png"
import Image2 from "@/shared/assets/images/send-inquiry/2.png"
import Image3 from "@/shared/assets/images/send-inquiry/3.png"
import Image4 from "@/shared/assets/images/send-inquiry/4.png"
import Image5 from "@/shared/assets/images/send-inquiry/5.png"
import Image6 from "@/shared/assets/images/send-inquiry/6.png"
import IconArrow from "@/shared/assets/images/send-inquiry/arrow-narrow-right.svg"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./send-inquiry.module.scss"

export const SendInquiry = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	return (
		<Box className={s.sendInquiry}>
			<Grid>
				<Grid.Col span={matches ? 12 : 6}>
					<Flex className={s.sendInquiryLeft}>
						<Text component={"h3"} className={cx(s.sendInquiryTitle, "title")}>
							Have you found the perfect match <br /> for you?
						</Text>
						<Text component={"p"} className={cx(s.sendInquiryDescription)}>
							We are delighted to create any complex journey for you. Feel free
							to call us on +998 91 001 12 41 or fill out the form.
						</Text>
						<FilledButton
							rightSection={<IconArrow />}
							className={s.sendInquiryButton}
						>
							Send your Inquiry
						</FilledButton>
					</Flex>
				</Grid.Col>
				{!matches ? (
					<Grid.Col span={6}>
						<Box className={s.sendInquiryRight}>
							<Flex className={s.sendInquiryRightTop} gap={"2.13rem"}>
								<Box className={s.sendInquiryRightImage}>
									<Image src={Image1} alt={"239"} height={239} />
								</Box>
								<Box className={s.sendInquiryRightImage}>
									<Image src={Image2} alt={"239"} height={239} />
								</Box>
								<Box className={s.sendInquiryRightImage}>
									<Image src={Image3} alt={"239"} height={239} />
								</Box>
							</Flex>
							<Flex className={s.sendInquiryRightBottom} gap={"2.13rem"}>
								<Box className={s.sendInquiryRightImage}>
									<Image src={Image4} alt={"239"} height={239} />
								</Box>
								<Box className={s.sendInquiryRightImage}>
									<Image src={Image5} alt={"239"} height={239} />
								</Box>
								<Box className={s.sendInquiryRightImage}>
									<Image src={Image6} alt={"239"} height={239} />
								</Box>
							</Flex>
						</Box>
					</Grid.Col>
				) : null}
			</Grid>
		</Box>
	)
}
