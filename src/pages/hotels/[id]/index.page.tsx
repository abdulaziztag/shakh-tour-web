import { Container, Drawer, Flex, Text } from "@mantine/core"
import { useRouter } from "next/router"
import React from "react"

import { Layout } from "@/widgets"

import LocationIcon from "@/shared/assets/images/map-marker.svg"
import PhoneIcon from "@/shared/assets/images/phone-2.svg"
import { AllHotelFilter } from "@/shared/ui"
import { BackBtn } from "@/shared/ui/back-btn"

import "./about-hotel.scss"

type Params = { id: string }

const AboutHotel = () => {
	const router = useRouter()
	const { id } = router.query as Params
	console.log(id)
	const [opened, setOpened] = React.useState(false)
	const onClose = () => setOpened(false)
	return (
		<>
			<Layout>
				<Container size={"1440px"} className={"about-hotel"}>
					<BackBtn fallbackUrl={"/hotels"} />
					<Text size={"2rem"} c={"black"} fw={700} mt={24} mb={6}>
						Hilton Tashkent Hotel
					</Text>
					<Flex
						gap={{ base: 12, sm: 24 }}
						direction={{ base: "column", sm: "row" }}
						mb={24}
					>
						<Flex gap={8}>
							<LocationIcon />
							<p>Hilton Tashkent Hotel</p>
						</Flex>
						<Flex gap={8}>
							<PhoneIcon style={{ stroke: "black", color: "black" }} />
							<p>1 Ukchi Street, 100027 Tashkent, Uzbekistan</p>
						</Flex>
					</Flex>
				</Container>
				<Drawer
					opened={opened}
					onClose={onClose}
					size={"100%"}
					withCloseButton={false}
				>
					<AllHotelFilter onclickBack={() => setOpened(false)} />
				</Drawer>
			</Layout>
		</>
	)
}

export default AboutHotel
