import Head from "next/head"
import React from "react"

import { Layout } from "@/widgets"

const Tours = () => {
	return (
		<>
			<Head>
				<title>Shakh tours - Tours</title>
				<meta
					name="description"
					content="Добро пожаловать в Adams, вашу платформу для инновационных решений."
				/>
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
				<meta
					property="og:description"
					content={
						"Добро пожаловать в Adams, вашу платформу для инновационных решений."
					}
				/>
				<meta property="og:image" content="" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
				/>
				<meta name="roboto" content="index" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>Tours</Layout>
		</>
	)
}

export default Tours
