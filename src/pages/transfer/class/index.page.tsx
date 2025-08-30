import { Box, Container, Flex } from "@mantine/core"
import Head from "next/head"
import { useRouter } from "next/router"

import { Layout } from "@/widgets"

import { TransferClassCard } from "@/shared/ui/transfer-class-card"

const Tours = () => {
	const router = useRouter()

	return (
		<>
			<Head>
				<title>Shakh tours - Transfers</title>
				<meta
					name="description"
					content="Book your transfer with Shakh tours"
				/>
				<meta
					name="keywords"
					content="transfer, booking, travel, Shakh tours"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Shakh tours - Transfers" />
				<meta
					property="og:description"
					content="Book your transfer with Shakh tours"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Container size="1440px" py="xl">
					<Box>
						<Flex gap="lg" style={{ marginBottom: "1rem" }}>
							<div>
								<p>From:</p>
								<p style={{ fontSize: 20, fontWeight: "bold" }}>
									Tashkent airport
								</p>
							</div>
							<div>
								<p>To:</p>
								<p style={{ fontSize: 20, fontWeight: "bold" }}>Mariott</p>
							</div>
						</Flex>
						<p>29, Fri, 17:00</p>
						<p>2 adults</p>
						<Flex direction="column" gap="md" style={{ marginTop: "1rem" }}>
							{Array.from({ length: 3 }).map((_, index) => (
								<TransferClassCard
									key={index}
									price={46}
									oldPrice={46}
									onChoose={() => router.push("/transfer/details")}
								/>
							))}
						</Flex>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export default Tours
