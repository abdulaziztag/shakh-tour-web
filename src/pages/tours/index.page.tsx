import { Container, Drawer } from "@mantine/core"
import Head from "next/head"
import React from "react"

import { AllTours, Layout } from "@/widgets"

import { AllTourFilter, PageHeader } from "@/shared/ui"

const Tours = () => {
	const [opened, setOpened] = React.useState(false)
	const onClose = () => setOpened(false)

	return (
		<>
			<Head>
				<title>Shakh tours - All Tours</title>
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
						title={"All Tours"}
						onClickFilter={() => setOpened(true)}
					/>
					<AllTours />
				</Container>
				<Drawer
					opened={opened}
					onClose={onClose}
					size={"100%"}
					withCloseButton={false}
				>
					<AllTourFilter onclickBack={() => setOpened(false)} />
				</Drawer>
			</Layout>
		</>
	)
}

export default Tours
