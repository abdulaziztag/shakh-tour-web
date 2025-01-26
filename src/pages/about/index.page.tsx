import { Container } from "@mantine/core"
import Head from "next/head"
import React from "react"

import { AboutAddress, AboutInfo, AboutServices, Layout } from "@/widgets"

const About = () => {
	return (
		<>
			<Head>
				<title>Shakh tours - About</title>
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
					<AboutInfo />
				</Container>
				<AboutServices />
				<Container size={"1440px"}>
					<AboutAddress />
				</Container>
			</Layout>
		</>
	)
}

export default About
