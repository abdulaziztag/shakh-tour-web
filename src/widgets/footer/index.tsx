import { Container, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
import React from "react"

import IconFacebook from "@/shared/assets/images/footer/facebook.svg"
import IconInstagram from "@/shared/assets/images/footer/instagram.svg"
import IconTelegram from "@/shared/assets/images/footer/telegram.svg"
import Logo from "@/shared/assets/images/logo-white.svg"

import s from "./footer.module.scss"

export const FooterSection = () => {
	// const { t, lang } = useTranslation("common")
	// const router = useRouter()
	// const language = lang as "ru" | "uz"

	const matches = useMediaQuery("(max-width: 992px)")

	return (
		<footer className={s.footerSection}>
			<Container size={"1440px"}>
				<Grid className={s.footerSectionTop}>
					<Grid.Col span={matches ? 12 : 3}>
						<Logo />
					</Grid.Col>
					<Grid.Col span={matches ? 6 : 3}>
						<Text component={"p"} className={s.footerSectionTitle}>
							Tours
						</Text>
						<Flex direction={"column"} gap={"0.75rem"}>
							<Link href={"/"} className={s.footerSectionLink}>
								Programm tour
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Date and cost
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Living
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Pricing
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Releases
							</Link>
						</Flex>
					</Grid.Col>
					<Grid.Col span={matches ? 6 : 3}>
						<Text component={"p"} className={s.footerSectionTitle}>
							Services
						</Text>
						<Flex direction={"column"} gap={"0.75rem"}>
							<Link href={"/"} className={s.footerSectionLink}>
								Transfer
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Small groups
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Private tours
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Custom tours
							</Link>
						</Flex>
					</Grid.Col>
					<Grid.Col span={matches ? 6 : 3}>
						<Text component={"p"} className={s.footerSectionTitle}>
							Company
						</Text>
						<Flex direction={"column"} gap={"0.75rem"}>
							<Link href={"/"} className={s.footerSectionLink}>
								About us
							</Link>
							<Link href={"/"} className={s.footerSectionLink}>
								Our Team
							</Link>
							{!matches ? (
								<>
									<Link href={"/"} className={s.footerSectionLink}>
										Privacy Policy
									</Link>
									<Link href={"/"} className={s.footerSectionLink}>
										Contacts
									</Link>
								</>
							) : null}
						</Flex>
					</Grid.Col>
					{matches ? (
						<>
							<Grid.Col span={matches ? 6 : 3}>
								<Flex
									direction={"column"}
									gap={"0.75rem"}
									mt={matches ? "2rem" : "0"}
								>
									<Link href={"/"} className={s.footerSectionLink}>
										Privacy Policy
									</Link>
									<Link href={"/"} className={s.footerSectionLink}>
										Contacts
									</Link>
								</Flex>
							</Grid.Col>
						</>
					) : null}
				</Grid>
				<Flex className={s.footerSectionBottom}>
					<Text component={"p"} className={s.footerSectionBottomInfo}>
						© 2024 Designed by <Link href={""}>Doniyor</Link>
					</Text>
					<Flex gap={"2rem"}>
						<Link href={"/"}>
							<IconInstagram />
						</Link>
						<Link href={"/"}>
							<IconTelegram />
						</Link>
						<Link href={"/"}>
							<IconFacebook />
						</Link>
					</Flex>
				</Flex>
			</Container>
		</footer>
	)
}
