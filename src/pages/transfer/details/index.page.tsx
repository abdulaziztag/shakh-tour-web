import {
	ActionIcon,
	Box,
	Button,
	Card,
	Checkbox,
	Container,
	Grid,
	Group,
	NumberInput,
	Radio,
	Stack,
	Text,
	Textarea,
	TextInput,
} from "@mantine/core"
import Head from "next/head"
import React, { useMemo, useState } from "react"

import { Navbar } from "@/widgets"
import { FooterSection } from "@/widgets/footer"

export const FareDetailsCard = () => {
	const [track, setTrack] = useState(false)
	const from = "Dubai Airport (DXB)"
	const to = "Millennium Place Marina Hotel"
	const pickup = "Sep 11, Thu, at 12:30 PM"

	const sectionBox: React.CSSProperties = {
		padding: 12,
		borderRadius: 10,
		background: "#fafafa",
		border: "1px solid #eceff3",
		borderLeft: "4px solid #dbe3f5",
	}

	return (
		<Card shadow="sm" radius="md" p="lg" withBorder>
			<Text fw={700} fz="lg" mb="md">
				Fare details
			</Text>

			<Stack gap="lg">
				<Box style={sectionBox}>
					<Text fz="sm" c="dimmed" mb={4}>
						From
					</Text>
					<Text fw={600} mb={8}>
						{from}
					</Text>
					<TextInput placeholder="Terminal name, for example, A" />
				</Box>

				{/* PICK-UP */}
				<Box style={sectionBox}>
					<Group justify="space-between" mb={8}>
						<Text fw={600}>Pick-up on: {pickup}</Text>
					</Group>
					<Checkbox
						label="Activate flight tracking"
						checked={track}
						onChange={(e) => setTrack(e.currentTarget.checked)}
					/>
				</Box>

				<Box style={sectionBox}>
					<Text fz="sm" c="dimmed" mb={4}>
						To
					</Text>
					<Text fw={600}>{to}</Text>
				</Box>
			</Stack>
		</Card>
	)
}

const MainPassengerCard: React.FC = () => {
	return (
		<Card shadow="sm" radius="md" p="lg" withBorder>
			<Text fw={700} fz="lg" mb="md">
				Information about the main passenger
			</Text>

			<Grid gutter="md">
				<Grid.Col span={6}>
					<TextInput label="First name *" defaultValue="John" />
				</Grid.Col>
				<Grid.Col span={6}>
					<TextInput label="Last name *" defaultValue="Smith" />
				</Grid.Col>
			</Grid>

			<Stack gap="sm" mt="md">
				<TextInput label="Text on the sign" placeholder="John Smith" />

				<Grid gutter="md">
					<Grid.Col span={6}>
						<TextInput label="Country code" defaultValue="+998" />
					</Grid.Col>
					<Grid.Col span={6}>
						<TextInput label="Phone number *" defaultValue="1231234567" />
					</Grid.Col>
				</Grid>

				<Text size="sm" c="dimmed" mt="sm">
					Total number of passengers: 2 adults
				</Text>
			</Stack>
		</Card>
	)
}

export const BaggageCard = () => {
	const [enabled, setEnabled] = useState(true)
	const [count, setCount] = useState(2)

	const dec = () => setCount((c) => Math.max(0, c - 1))
	const inc = () => setCount((c) => c + 1)

	return (
		<Card
			withBorder
			radius="md"
			p="lg"
			style={{ background: "#fffdf6", borderColor: "#f5dca4" }}
		>
			<Group justify="space-between" mb="sm">
				<Text fw={700} fz="lg">
					Baggage
				</Text>
				<Text c="dimmed">Available 1 piece of luggage</Text>
			</Group>

			<Group justify="space-between" align="center">
				<div>
					<Checkbox
						label="Standard baggage"
						checked={enabled}
						onChange={(e) => setEnabled(e.currentTarget.checked)}
					/>
					<Text size="sm" c="dimmed" mt={4}>
						Enter the number of bags.
					</Text>
				</div>

				<Group gap="xs">
					<ActionIcon
						variant="default"
						onClick={dec}
						disabled={!enabled || count === 0}
						aria-label="decrease"
					>
						−
					</ActionIcon>
					<Text fw={600} w={28} ta="center">
						{enabled ? count : 0}
					</Text>
					<ActionIcon
						variant="default"
						onClick={inc}
						disabled={!enabled}
						aria-label="increase"
					>
						+
					</ActionIcon>
				</Group>
			</Group>
		</Card>
	)
}

export const CommentCard = () => {
	return (
		<Card shadow="sm" radius="md" p="lg" withBorder>
			<Text fw={700} fz="lg" mb="sm">
				Comment to the driver
			</Text>

			<Text size="sm" c="dimmed" mb="sm">
				Please note: compliance with requests is not guaranteed and is left to
				the driver's discretion.
			</Text>

			<Textarea
				placeholder="I need 40 more minutes in the airport."
				autosize
				minRows={3}
			/>
		</Card>
	)
}

const RideSummaryCard = ({}) => {
	return (
		<Card shadow="sm" radius="md" p="lg" withBorder>
			<Text fw={700} fz="lg">
				Economy
			</Text>
			<Text size="sm" c="dimmed">
				Toyota Prius or a similar one
			</Text>

			<Stack gap={4} mt="md">
				<Text size="sm">Up to 3 passengers</Text>
				<Text size="sm">Up to 3 pieces of baggage</Text>
				<Text size="sm">60 min. waiting time included</Text>
				<Text size="sm">Meeting with a plate</Text>
				<Text size="sm">Flight tracking</Text>
				<Text size="sm" c="green">
					Free cancellation 24h before the trip
				</Text>
				<Text size="sm" c="blue">
					Fare Rules
				</Text>
			</Stack>

			<Stack gap="xs" mt="md">
				<Group justify="space-between">
					<Text>Transfer</Text>
					<Text fw={600}>$25</Text>
				</Group>
				<Group justify="space-between">
					<Text fw={700}>Total</Text>
					<Text fz="xl" fw={800}>
						$25
					</Text>
				</Group>
			</Stack>
		</Card>
	)
}

const PriceForCustomerCard = ({}) => {
	return (
		<Card shadow="sm" radius="md" p="lg" withBorder bg="#f7f7f7">
			<Text fw={700} fz="lg" mb="sm">
				Price for the customer
			</Text>

			<Group justify="space-between">
				<Text>Total resale price</Text>
				<Text fz="xl" fw={800}>
					$25
				</Text>
			</Group>

			<Group justify="space-between" mt="xs">
				<Text>Includes commission (0%)</Text>
				<Text>$0</Text>
			</Group>

			<Text size="sm" c="dimmed" mt="sm">
				Press SHIFT + R to hide this section
			</Text>
		</Card>
	)
}

const PriceAndCommissionCard = () => {
	const [price, setPrice] = useState<number>(25)
	const [mode, setMode] = useState<"percent" | "usd">("percent")
	const [commissionPct, setCommissionPct] = useState<number>(0)
	const [commissionUsd, setCommissionUsd] = useState<number>(0)

	const approxUsd = useMemo(
		() => +(price * (commissionPct / 100)).toFixed(2),
		[price, commissionPct],
	)
	const approxPct = useMemo(
		() => (price > 0 ? +((commissionUsd / price) * 100).toFixed(2) : 0),
		[price, commissionUsd],
	)

	return (
		<Card shadow="sm" radius="md" p="lg" withBorder>
			<Text fw={700} fz="lg" mb="xs">
				Price for the customer and commission
			</Text>
			<Text size="sm" c="dimmed" mb="md">
				Enter the amount of your commission. The minimal amount is $0.
			</Text>

			<Group grow align="flex-end">
				<Grid gutter="md" align="end" mt="sm">
					<Grid.Col span={{ base: 12, md: 4 }}>
						<Stack gap={4}>
							<Text size="sm" fw={500}>
								Price for the customer
							</Text>
							<NumberInput
								w="100%"
								value={price}
								onChange={(v) => setPrice(Number(v) || 0)}
								min={0}
								rightSection={
									<Text px="xs" c="dimmed">
										$
									</Text>
								}
								rightSectionPointerEvents="none"
								rightSectionWidth={28}
							/>
							<Text size="xs" c="dimmed" mih={18} />
						</Stack>
					</Grid.Col>

					<Grid.Col span={{ base: 12, md: 4 }}>
						<Stack gap={4}>
							<Text size="sm" fw={500}>
								Commission
							</Text>

							{mode === "percent" ? (
								<>
									<NumberInput
										w="100%"
										value={commissionPct}
										onChange={(v) => setCommissionPct(Number(v) || 0)}
										min={0}
										rightSection={
											<Text px="xs" c="dimmed">
												%
											</Text>
										}
										rightSectionPointerEvents="none"
										rightSectionWidth={28}
									/>
									<Text size="xs" c="dimmed" mih={18}>
										≈ ${approxUsd}
									</Text>
								</>
							) : (
								<>
									<NumberInput
										w="100%"
										value={commissionUsd}
										onChange={(v) => setCommissionUsd(Number(v) || 0)}
										min={0}
										rightSection={
											<Text px="xs" c="dimmed">
												$
											</Text>
										}
										rightSectionPointerEvents="none"
										rightSectionWidth={28}
									/>
									<Text size="xs" c="dimmed" mih={18}>
										≈ {approxPct}%
									</Text>
								</>
							)}
						</Stack>
					</Grid.Col>

					<Grid.Col span={{ base: 12, md: 4 }}>
						<Stack gap={4}>
							<Text size="sm" fw={500}>
								Mode
							</Text>
							<Radio.Group
								value={mode}
								onChange={(v) => setMode(v as "percent" | "usd")}
							>
								<Group gap="md">
									<Radio value="percent" label="in percent" />
									<Radio value="usd" label="in USD" />
								</Group>
							</Radio.Group>
							<Text size="xs" c="dimmed" mih={18} />
						</Stack>
					</Grid.Col>
				</Grid>
			</Group>
		</Card>
	)
}

export const BookTransferCard: React.FC<{ onBook?: () => void }> = ({
	onBook,
}) => {
	return (
		<Card shadow="sm" radius="md" p="lg" withBorder>
			<Text fw={700} fz="lg">
				Book a transfer
			</Text>
			<Text size="sm" c="dimmed" mt="xs">
				Driver information is available 24 hours before the trip.
			</Text>

			<Group justify="space-between" align="center" mt="md">
				<Text c="teal" fw={600}>
					Just one more step
				</Text>
				<Button radius="md" color="yellow" onClick={onBook}>
					Book now
				</Button>
			</Group>

			<Text size="sm" c="dimmed" mt="sm">
				By clicking the "Book now" button, you accept{" "}
				<Text component="span" td="underline">
					fare rules
				</Text>{" "}
				and confirm consent to process personal data.
			</Text>
		</Card>
	)
}

export default function TransferCheckoutDemo() {
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
			<Box
				style={{
					minHeight: "100dvh",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Box w="100%">
					<Navbar />
				</Box>

				<Box style={{ flex: "1 1 auto" }}>
					<Container size="1440px" py="xl" style={{ overflow: "visible" }}>
						<Grid gutter="lg" align="start">
							{/* Left column */}
							<Grid.Col span={{ base: 12, lg: 8 }}>
								<Stack gap="md">
									<FareDetailsCard />
									<MainPassengerCard />
									<BaggageCard />
									<CommentCard />
									<PriceAndCommissionCard />
									<BookTransferCard onBook={() => alert("Booked!")} />
								</Stack>
							</Grid.Col>

							<Grid.Col
								span={{ base: 12, lg: 4 }}
								style={{
									position: "sticky",
									top: 16, // adjust if Navbar is fixed
									alignSelf: "flex-start",
									height: "max-content",
								}}
							>
								<Stack gap="md">
									<RideSummaryCard />
									<PriceForCustomerCard />
								</Stack>
							</Grid.Col>
						</Grid>
					</Container>
				</Box>

				<Box w="100%">
					<FooterSection />
				</Box>
			</Box>
		</>
	)
}
