import IconMenu from "@//shared/assets/images/burger-menu.svg"
import IconLogoMobile from "@//shared/assets/images/logo-mobile.svg"
import IconLogo from "@//shared/assets/images/logo.svg"
import IconClose from "@//shared/assets/images/x-close.svg"
import { ActionIcon, Box, Container, Drawer, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/router"
import React, { useState } from "react"

import { LanguageSwitcher } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./navbar.module.scss"

export const Navbar = () => {
	// const { t } = useTranslation("common")
	const [opened, setOpened] = useState(false)
	const router = useRouter()
	const path = usePathname()

	const onClose = () => {
		setOpened(false)
	}

	const menuLinks = [
		{
			name: "Home",
			path: "/",
		},
		{
			name: "Tours",
			path: "/tours",
		},
		{
			name: "Hotels",
			path: "/hotels",
		},
		{
			name: "Transfer",
			path: "/transfer",
		},
		{
			name: "About us",
			path: "/about",
		},
	]

	return (
		<>
			<Container size={"1440px"}>
				<Box className={s.navbar}>
					<Box onClick={() => router.push("/")} className={s.navbarLogo}>
						<IconLogo />
					</Box>
					<Flex className={s.navbarMenu}>
						{menuLinks.map((link, index) => (
							<Link
								key={index}
								href={link.path}
								className={cx(s.navbarMenuLink, {
									[s.active]: path === link.path,
								})}
							>
								{link.name}
							</Link>
						))}
					</Flex>
					<Flex gap={"1.5rem"} className={s.navbarMenuRight}>
						<LanguageSwitcher direction={"column"} />
						<FilledButton className={s.navbarLoginButton}>Login</FilledButton>
					</Flex>
					<Box className={s.navbarMenuBurger} onClick={() => setOpened(true)}>
						<IconMenu />
					</Box>
				</Box>
			</Container>
			<Drawer
				opened={opened}
				onClose={onClose}
				classNames={{
					root: s.navbarDrawerRoot,
					body: s.navbarDrawerBody,
					overlay: s.navbarDrawerOverlay,
					content: s.navbarDrawerContent,
				}}
				withCloseButton={false}
				size={"17.25rem"}
			>
				<Flex direction={"column"} h={"100%"} justify={"space-between"}>
					<Flex direction={"column"} gap={"1rem"}>
						<Flex justify={"space-between"} align={"center"} gap={"1.87rem"}>
							<Box className={s.navbarDrawerLogo}>
								<IconLogoMobile />
							</Box>
							<ActionIcon bg={"#044949"} onClick={onClose}>
								<IconClose />
							</ActionIcon>
						</Flex>
						<Flex direction={"column"} className={s.navbarDrawer}>
							{menuLinks.map((link, index) => (
								<Link
									key={index}
									href={link.path}
									className={cx(s.navbarDrawerLink, {
										[s.active]: path === link.path,
									})}
								>
									{link.name}
								</Link>
							))}
							<Link
								href={"/profile"}
								className={cx(s.navbarDrawerLink, {
									[s.active]: path === "/profile",
								})}
							>
								Profile
							</Link>
						</Flex>
					</Flex>
					<Flex w={"100%"}>
						<Flex justify={"space-between"} w={"100%"}>
							<Text
								component={"p"}
								className={cx(s.drawerLanguageText, s.active)}
							>
								Рус
							</Text>
							<Text component={"p"} className={cx(s.drawerLanguageText)}>
								Eng
							</Text>
							<Text component={"p"} className={cx(s.drawerLanguageText)}>
								O’zb
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Drawer>
		</>
	)
}
