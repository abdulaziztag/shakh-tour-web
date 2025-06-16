import { Box, Button, Container, Grid, Group, Text } from "@mantine/core"
import Head from "next/head"
import React, { useState } from "react"

import { Layout } from "@/widgets"

import ClickIcon from "@/shared/assets/images/click-icon.svg"
import HumoIcon from "@/shared/assets/images/humo.svg"
import VisaLabelIcon from "@/shared/assets/images/logos_visa.svg"
import PaymeIcon from "@/shared/assets/images/payme-icon.svg"
import UzcardIcon from "@/shared/assets/images/uzcard.svg"
import VisaIcon from "@/shared/assets/images/visa.svg"
import { Input } from "@/shared/ui/input"
import { PhoneInput } from "@/shared/ui/mask-input/index"
import { PaymentMethodCard } from "@/shared/ui/payment-card"
import { Select } from "@/shared/ui/select"
import { Textarea } from "@/shared/ui/textarea"

import s from "./transfer.module.scss"

const Tours = () => {
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
	const classOptions = ["Economy", "Business", "First Class", "Premium"]

	const handleInputChange = (field: string, value: string | null) => {
		setFormData((prev) => ({ ...prev, [field]: value || "" }))
		if (errors[field]) {
			setErrors((prev) => ({ ...prev, [field]: "" }))
		}
	}

	const handlePhoneChange = (value: string) => {
		setFormData((prev) => ({ ...prev, phoneNumber: value }))
		if (errors.phoneNumber) {
			setErrors((prev) => ({ ...prev, phoneNumber: "" }))
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
		if (!formData.classAuto) newErrors.classAuto = "Please select class"
		if (!formData.fullName) newErrors.fullName = "Please enter full name"
		if (!formData.phoneNumber)
			newErrors.phoneNumber = "Please enter phone number"

		if (formData.paymentMethod === "bank_card") {
			if (!formData.cardNumber)
				newErrors.cardNumber = "Please enter card number"
			if (!formData.cardholderName)
				newErrors.cardholderName = "Please enter cardholder name"
			if (!formData.validUntil)
				newErrors.validUntil = "Please enter valid until date"
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors)
			return
		}

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
									label="Date"
									placeholder="17.10.2024"
									value={formData.date}
									onChange={(e) => handleInputChange("date", e.target.value)}
									error={errors.date}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Input
									label="Time"
									placeholder="17.10.2024"
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
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Select
									label="Class auto"
									placeholder="Mybach"
									data={classOptions}
									value={formData.classAuto}
									onChange={(value) => handleInputChange("classAuto", value)}
									error={errors.classAuto}
								/>
							</Grid.Col>
						</Grid>
						<Text size="lg" fw={500} mb="md" className={s.contractInfo}>
							Contacts
						</Text>
						<Grid gutter="md" mb="xl">
							<Grid.Col span={{ base: 12, md: 6 }}>
								<Input
									label="F.I.O"
									placeholder="Write full name"
									value={formData.fullName}
									onChange={(e) =>
										handleInputChange("fullName", e.target.value)
									}
									error={errors.fullName}
								/>
							</Grid.Col>
							<Grid.Col span={{ base: 12, md: 6 }}>
								<PhoneInput
									phoneNumber={{
										label: "Phone number",
										value: formData.phoneNumber,
										onChange: handlePhoneChange,
									}}
									error={errors.phoneNumber}
								/>
							</Grid.Col>
							<Grid.Col span={12} className={s.commentWrap}>
								<Textarea
									label="Comments"
									placeholder="Select team member"
									minRows={4}
									value={formData.comments}
									onChange={(e) =>
										handleInputChange("comments", e.target.value)
									}
								/>
							</Grid.Col>
						</Grid>
						<Text size="lg" fw={500} mb="md" className={s.paymentMethod}>
							Payment method
						</Text>
						<div className={s.payment_methods}>
							<Grid gutter="md" mb="xl">
								<Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
									<PaymentMethodCard
										value="bank_card"
										active={formData.paymentMethod === "bank_card"}
										label="Via bank card"
										onClick={() =>
											handleInputChange("paymentMethod", "bank_card")
										}
										icon={[
											<UzcardIcon />,
											<HumoIcon />,
											<VisaIcon />,
											<VisaLabelIcon />,
										]}
									/>
								</Grid.Col>

								<Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
									<PaymentMethodCard
										value="payme"
										active={formData.paymentMethod === "payme"}
										label="Payme"
										onClick={() => handleInputChange("paymentMethod", "payme")}
										icon={<PaymeIcon />}
									/>
								</Grid.Col>

								<Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
									<PaymentMethodCard
										value="click"
										active={formData.paymentMethod === "click"}
										label="Click"
										onClick={() => handleInputChange("paymentMethod", "click")}
										icon={<ClickIcon />}
									/>
								</Grid.Col>

								<Grid.Col span={{ base: 12, sm: 6, md: 3 }}>
									<PaymentMethodCard
										value="pay_on_site"
										active={formData.paymentMethod === "pay_on_site"}
										label="Pay on site"
										onClick={() =>
											handleInputChange("paymentMethod", "pay_on_site")
										}
										subLabel="Make the payment at the hotel"
									/>
								</Grid.Col>
							</Grid>
							{formData.paymentMethod === "bank_card" && (
								<Grid gutter="md" mb="xl">
									<Grid.Col span={{ base: 12, md: 4 }}>
										<Input
											label="Card number"
											placeholder="8600 1234 5678 9012"
											type="tel"
											value={formData.cardNumber}
											onChange={(e) =>
												handleInputChange("cardNumber", e.target.value)
											}
											error={errors.cardNumber}
										/>
									</Grid.Col>

									<Grid.Col span={{ base: 12, md: 4 }}>
										<Input
											label="Cardholder's name"
											placeholder="Dildora"
											type="text"
											value={formData.cardholderName}
											onChange={(e) =>
												handleInputChange("cardholderName", e.target.value)
											}
											error={errors.cardholderName}
										/>
									</Grid.Col>

									<Grid.Col span={{ base: 12, md: 4 }}>
										<Input
											label="Valid until"
											placeholder="12/24"
											type="text"
											value={formData.validUntil}
											onChange={(e) =>
												handleInputChange("validUntil", e.target.value)
											}
											error={errors.validUntil}
										/>
									</Grid.Col>
								</Grid>
							)}
						</div>

						<Group justify="flex-end">
							<Button
								onClick={handleSubmit}
								className={s.sendBtn}
								size="lg"
							>
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
