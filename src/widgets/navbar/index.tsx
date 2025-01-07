import IconLogo from "@//shared/assets/images/logo.svg"
import { Box, Container, Flex } from "@mantine/core"
import cx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

import { LanguageSwitcher } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./navbar.module.scss"

export const Navbar = () => {
	// const { t } = useTranslation("common")

	// const router = useRouter()
	const path = usePathname()

	const menuLinks = [
		{
			name: "Home",
			path: "/main",
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
					<IconLogo />
					<Flex className={s.navbarMenu}>
						{menuLinks.map((link) => (
							<Link
								href={link.path}
								className={cx(s.navbarMenuLink, {
									[s.active]: path === link.path,
								})}
							>
								{link.name}
							</Link>
						))}
					</Flex>
					<Flex gap={"1.5rem"}>
						<LanguageSwitcher direction={"column"} />
						<FilledButton className={s.navbarLoginButton}>Login</FilledButton>
					</Flex>
				</Box>
			</Container>
		</>

		// <Box className={s.navbarWrapper}>
		// 	<Flex
		// 		className={s.navbarLogo}
		// 		justify={"center"}
		// 		align={"center"}
		// 		onClick={() => router.push("/")}
		// 	>
		// 		<IconLogo />
		// 	</Flex>
		// 	<nav className={s.navbarNav}>
		// 		<ul className={s.navbarNavList}>
		// 			{links.map((link) => (
		// 				<li key={link.href}>
		// 					<Link
		// 						href={link.href}
		// 						className={cx(s.navbarNavListLink, {
		// 							[s.active]: path === link.href,
		// 						})}
		// 					>
		// 						{link.title}
		// 					</Link>
		// 				</li>
		// 			))}
		// 		</ul>
		// 	</nav>
		// 	<Switch>
		// 		<Case condition={openBurger}>
		// 			<Box className={s.navbarBurger} onClick={toggleBurger}>
		// 				<IconBurgerClose />
		// 			</Box>
		// 		</Case>
		// 		<Case condition={!openBurger}>
		// 			<Box className={s.navbarBurger} onClick={toggleBurger}>
		// 				<IconBurger />
		// 			</Box>
		// 		</Case>
		// 	</Switch>
		//
		// 	<Box className={s.navbarRight}>
		// 		<FilledButton fullWidth onClick={() => onClickToScroll("form")}>
		// 			{t("leave_request")}
		// 		</FilledButton>
		// 		<LanguageSwitcher direction={"column"} />
		// 	</Box>
		// 	{/* Mobile menu */}
		// 	<Drawer
		// 		opened={openBurger}
		// 		onClose={toggleBurger}
		// 		position={"top"}
		// 		withCloseButton={false}
		// 		classNames={{
		// 			root: s.drawerRoot,
		// 			body: s.drawerBody,
		// 			inner: s.drawerInner,
		// 			overlay: s.drawerOverlay,
		// 			content: s.drawerContent,
		// 		}}
		// 	>
		// 		<Box className={s.drawerContainer}>
		// 			<nav className={s.drawerNavMobile}>
		// 				<ul className={s.drawerNavMobileList}>
		// 					{links.map((link) => (
		// 						<li key={link.href}>
		// 							<Link
		// 								href={link.href}
		// 								className={cx(s.navbarNavListLink, {
		// 									[s.active]: path === link.href,
		// 								})}
		// 							>
		// 								{link.title}
		// 							</Link>
		// 						</li>
		// 					))}
		// 				</ul>
		// 			</nav>
		// 			<FilledButton
		// 				onClick={() => {
		// 					toggleBurger()
		// 					onClickToScroll("form")
		// 				}}
		// 				fullWidth
		// 			>
		// 				{t("leave_request")}
		// 			</FilledButton>
		// 			<Link className={cx(s.navbarRightPhone)} href={"tel:+998940846686"}>
		// 				<IconPhone />
		// 				+998 94 084 66 86
		// 			</Link>
		//
		// 			<Flex gap={"1rem"}>
		// 				<Text
		// 					component={"p"}
		// 					className={s.navbarNavListLink}
		// 					onClick={() => {
		// 						setLanguage("ru")
		// 						setSelectedLang("ru")
		// 						toggleBurger()
		// 					}}
		// 				>
		// 					Русский
		// 				</Text>
		// 				<Text
		// 					component={"p"}
		// 					className={s.navbarNavListLink}
		// 					onClick={() => {
		// 						setLanguage("uz")
		// 						setSelectedLang("uz")
		// 						toggleBurger()
		// 					}}
		// 				>
		// 					O'zbekcha
		// 				</Text>
		// 			</Flex>
		// 		</Box>
		// 	</Drawer>
		// </Box>
	)
}
