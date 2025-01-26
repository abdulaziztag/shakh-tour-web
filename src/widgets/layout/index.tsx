import { Box, Container } from "@mantine/core"
import cx from "clsx"
import React, { FC, PropsWithChildren } from "react"

import { Navbar } from "@/widgets"
import { FooterSection } from "@/widgets/footer"

import s from "./styles.module.scss"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
	// const pathname = usePathname()
	// const router = useRouter()
	// useEffect(() => {
	// 	const token = localStorage.getItem(TOKEN.AUTH_TOKEN)
	// 	if (!token) router.push(AppPages.LoginPage)
	// }, [])
	return (
		<Container className={cx(s.wrapper)} size={"100%"}>
			<Navbar />
			<Box className={s.content}>{children}</Box>
			<FooterSection />
		</Container>
	)
}
