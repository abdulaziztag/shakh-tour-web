import { Container, Group, Paper, Stack, Text, Title } from "@mantine/core"
import { FC, ReactNode, useState } from "react"

import { Layout } from "@/widgets"
import MyHotels from "@/widgets/profile/my-hotels"
import MyTours from "@/widgets/profile/my-tours"
import PersonalInformation from "@/widgets/profile/personal-information"

import IconBuilding from "@/shared/assets/images/building-07.svg"
import IconLogout from "@/shared/assets/images/log-out-01.svg"
import IconShopping from "@/shared/assets/images/shopping-bag-02.svg"
import IconUser from "@/shared/assets/images/user_outline_28.svg"

import classes from "./profile.module.scss"

interface MenuItem {
	id: string
	label: string
	icon: ReactNode
	component: ReactNode
	isLogout?: boolean
}

const ProfileLayout: FC = () => {
	const [activeTab, setActiveTab] = useState("personal-info")

	const menuItems: MenuItem[] = [
		{
			id: "personal-info",
			label: "Personal Information",
			icon: <IconUser />,
			component: <PersonalInformation />,
		},
		{
			id: "my-tours",
			label: "My tours",
			icon: <IconShopping />,
			component: <MyTours />,
		},
		{
			id: "my-hotels",
			label: "My hotels",
			icon: <IconBuilding />,
			component: <MyHotels />,
		},
		{
			id: "logout",
			label: "Log out",
			icon: <IconLogout />,
			component: null,
			isLogout: true,
		},
	]

	const handleMenuClick = (itemId: string) => {
		if (itemId === "logout") {
			console.log("Logging out...")
			return
		}
		setActiveTab(itemId)
	}

	const currentComponent = menuItems.find(
		(item) => item.id === activeTab,
	)?.component

	return (
		<Layout>
			<Container size="1440px" mb='116px'>
				<Title order={2} mb='16px' className={classes.sidebarTitle}>
					Profile
				</Title>
				<div className={classes.layout}>
					<Paper className={classes.sidebar}>
						<Stack className={classes.sidebarMenu}>
							{menuItems.map((item) => (
								<Group
									key={item.id}
									className={`${classes.menuItem} ${
										activeTab === item.id ? classes.active : ""
									} ${item.isLogout ? classes.logoutItem : ""}`}
									onClick={() => handleMenuClick(item.id)}
								>
									{item.icon}
									<Text className={classes.label}>{item.label}</Text>
								</Group>
							))}
						</Stack>
					</Paper>
					<Paper className={classes.mainContent} >{currentComponent}</Paper>
				</div>
			</Container>
		</Layout>
	)
}

export default ProfileLayout
