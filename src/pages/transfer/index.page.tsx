import { Box, Button, Container, Grid, Group, Text } from "@mantine/core"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"

import { Layout } from "@/widgets"

import { Input } from "@/shared/ui/input"
import { Select } from "@/shared/ui/select"

import s from "./transfer.module.scss"

const Tours = () => {
	const router = useRouter()
	const [formData, setFormData] = useState({
		fromCountry: "",
		toCountry: "",
		date: "",
		time: "",
		passengers: "",
		classAuto: "",
		fullName: "",
		phoneNumber: "",
		comments: "",
		paymentMethod: "bank_card",
		cardNumber: "",
		cardholderName: "",
		validUntil: "",
	})

	const [errors, setErrors] = useState<Record<string, string>>({})

	const countries = ["United Kingdom", "United States", "Uzbekistan", "Vietnam"]

	const passengerOptions = [
		"1 person",
		"2 persons",
		"3 persons",
		"4 persons",
		"5+ persons",
	]

	const handleInputChange = (field: string, value: string | null) => {
		setFormData((prev) => ({ ...prev, [field]: value || "" }))
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: "" }))
		}
	}

	const handleSubmit = () => {
		const newErrors: Record<string, string> = {}

		if (!formData.fromCountry)
			newErrors.fromCountry = "Please select departure country"
		if (!formData.toCountry)
			newErrors.toCountry = "Please select destination country"
		if (!formData.date) newErrors.date = "Please select date"
		if (!formData.time) newErrors.time = "Please select time"
		if (!formData.passengers)
			newErrors.passengers = "Please select number of passengers"

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors)
			return
		}
		void router.push("/transfer/class")
		console.log("Form submitted:", formData)
	}

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
						<Text size="2xl" fw={600} mb="xl" className={s.title}>
							Transfer
						</Text>
						<Text size="lg" fw={500} mb="md" className={s.subtitle}>
							Details
						</Text>
						<Grid gutter="md" mb="xl">
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Select
									label="From"
									placeholder="Select country"
									data={countries}
									value={formData.fromCountry}
									onChange={(value) => handleInputChange("fromCountry", value)}
									error={errors.fromCountry}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Select
									label="To"
									placeholder="Select country"
									data={countries}
									value={formData.toCountry}
									onChange={(value) => handleInputChange("toCountry", value)}
									error={errors.toCountry}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Input
									label="When"
									placeholder="17.10.2024"
									value={formData.date}
									onChange={(e) => handleInputChange("date", e.target.value)}
									error={errors.date}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Input
									label="Pick-up time"
									placeholder="17:00"
									value={formData.time}
									onChange={(e) => handleInputChange("time", e.target.value)}
									error={errors.time}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Select
									label="Passengers"
									placeholder="2 persons"
									data={passengerOptions}
									value={formData.passengers}
									onChange={(value) => handleInputChange("passengers", value)}
									error={errors.passengers}
								/>
							</Grid.Col>
						</Grid>
						<Group justify="flex-end">
							<Button onClick={handleSubmit} className={s.sendBtn} size="lg">
								Send request
							</Button>
						</Group>
					</Box>
				</Container>
			</Layout>
		</>
	)
}

export default Tours
