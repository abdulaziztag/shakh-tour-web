import { Container, Drawer } from "@mantine/core"
import Head from "next/head"
// import { useRouter } from "next/router"
import React from "react"

import { AllHotels, Layout } from "@/widgets"

import { AllHotelFilter, PageHeader } from "@/shared/ui"
import { useRouter } from 'next/router'

const Hotels = () => {
	const [opened, setOpened] = React.useState(false)
	const onClose = () => setOpened(false)
	const router = useRouter();
	return (
		<>
			<Head>
				<title>Shakh tours - Hotels</title>
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
					<PageHeader
						title={"All Hotels"}
						onClickFilter={() => setOpened(true)}
					/>
					<AllHotels />
				</Container>
				<Drawer
					opened={opened}
					onClose={onClose}
					size={"100%"}
					withCloseButton={false}
				>
					<AllHotelFilter onClickBack={() => router.push('/tours')} />
				</Drawer>
			</Layout>
		</>
	)
}

export default Hotels
