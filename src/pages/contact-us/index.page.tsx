import { Box, Container, Flex } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import dynamic from "next/dynamic"
import Head from "next/head"
import React from "react"

import { AboutAddress, Layout } from "@/widgets"
import ContactForm from "@/widgets/contact-form"

const LocationMap = dynamic(() => import("@/widgets/location-map"), {
	ssr: false,
})
const ContactUs = () => {
	const isMobile = useMediaQuery("(max-width: 1400px)")
	const sampleHotels = [
		{
			id: "1",
			name: "Kerem Apart Hotel",
			position: [41.0082, 28.9784] as [number, number],
			type: "hotel" as const,
		},
		{
			id: "2",
			name: "Göcek Arion Hotel",
			position: [41.0072, 28.9794] as [number, number],
			type: "hotel" as const,
		},
		{
			id: "3",
			name: "Göcek Lykia Resort Hotel",
			position: [41.0092, 28.9774] as [number, number],
			type: "resort" as const,
		},
		{
			id: "4",
			name: "Vira Apart Hotel",
			position: [41.0062, 28.9804] as [number, number],
			type: "apartment" as const,
		},
	]
	return (
		<>
			<Head>
				<title>Contact us</title>
				<meta name="description" content="" />
				<meta
					name="keywords"
					content="innovative solutions, technology, Adams platform"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://adams.uz/" />
				<meta property="og:title" content="Adams" />
				<meta property="og:description" content={""} />
				<meta property="og:image" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<meta name="roboto" content="index" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Container size={"1440px"}>
					<Box mb={155} mt={100}>
						<Flex
							direction={isMobile ? "column" : "row"}
							gap={isMobile ? 40 : 100}
							align="stretch"
							style={{
								minHeight: isMobile ? "auto" : "100%",
							}}
						>
							<Box
								flex={1}
								w={isMobile ? "100%" : "auto"}
								style={{
									display: "flex",
									flexDirection: "column",
								}}
							>
								<AboutAddress />
							</Box>
							<Box
								flex={1}
								w={isMobile ? "100%" : "auto"}
								style={{
									display: "flex",
									justifyContent: isMobile ? "center" : "flex-start",
									alignItems: "flex-start",
									flexDirection: "column",
								}}
							>
								<ContactForm />
							</Box>
						</Flex>
						<LocationMap
							title="We are on the map"
							address="1 Ulčni Street, 100027 Tashkent, Uzbekistan"
							coordinates={[41.2995, 69.2401]}
							hotels={sampleHotels}
						/>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export default ContactUs
