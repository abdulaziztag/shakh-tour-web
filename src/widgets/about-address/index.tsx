import IconLocation from "@//shared/assets/images/location-white.svg"
import IconPhone from "@//shared/assets/images/phone.svg"
import { Box, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
import React from "react"

import s from "./about-address.module.scss"

export const AboutAddress = () => {
	const matches = useMediaQuery("(max-width: 845px)")
	return (
		<>
			<Box className={s.aboutAddress}>
				<Text component={"h3"} className={s.aboutAddressTitle}>
					Get in touch
				</Text>
				<Text component={"p"} className={s.aboutAddressDescription}>
					We'd love to hear from you. Our friendly team is always here to chat.
				</Text>
				<Flex
					direction={matches ? "column" : "row"}
					gap={matches ? "2rem" : "0"}
				>
					<Flex flex={"auto"} gap={"1rem"}>
						<Box>
							<IconLocation />
						</Box>
						<Flex direction={"column"} gap={"0.5rem"}>
							<Text component={"h4"} className={s.aboutAddressSubtitle}>
								Office
							</Text>
							<Text component={"p"} className={s.aboutAddressText}>
								Come say hello at our office HQ.
							</Text>
							<Flex direction={"column"} gap={"0.5rem"} mt={"0.75rem"}>
								<Text component={"h4"} className={s.aboutAddressSubtitle}>
									100 Smith Street
								</Text>
								<Text component={"p"} className={s.aboutAddressSubtitle}>
									Collingwood VIC 3066 AU
								</Text>
							</Flex>
						</Flex>
					</Flex>
					<Flex flex={"auto"} gap={"1rem"}>
						<Box>
							<IconPhone />
						</Box>
						<Flex direction={"column"} gap={"0.5rem"}>
							<Text component={"h4"} className={s.aboutAddressSubtitle}>
								Phone
							</Text>
							<Text component={"p"} className={s.aboutAddressText}>
								Mon-Fri from 8am to 5pm.
							</Text>
							<Flex direction={"column"} gap={"0.5rem"} mt={"0.75rem"}>
								<Link
									href={"tel:+44 20 1234 5678"}
									className={s.aboutAddressSubtitle}
								>
									+44 20 1234 5678
								</Link>
							</Flex>
						</Flex>
					</Flex>
				</Flex>
			</Box>
		</>
	)
}
