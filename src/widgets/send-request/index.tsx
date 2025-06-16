import { Button, Grid, Modal } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React, { FC, useState } from "react"

import { Input } from "@/shared/ui/input/index"
import { Select } from "@/shared/ui/select/index"
import { Textarea } from "@/shared/ui/textarea/index"

import s from "./send-request.module.scss"

interface HotelDetailsModalProps {
	opened: boolean
	onClose: () => void
	onSubmit?: (data: HotelFormData) => void
}

interface HotelFormData {
	fullName: string
	email: string
	citizenship: string
	phoneNumber: string
	tourStartDate: string
	numberOfTravellers: string
	comments: string
}

export const HotelDetailsModal: FC<HotelDetailsModalProps> = ({
	opened,
	onClose,
	onSubmit,
}) => {
	const isSmallScreen = useMediaQuery("(max-width: 450px)")
	const [formData, setFormData] = useState<HotelFormData>({
		fullName: "",
		email: "",
		citizenship: "",
		phoneNumber: "",
		tourStartDate: "",
		numberOfTravellers: "2",
		comments: "",
	})

	const citizenshipData = [
		"United States",
		"United Kingdom",
		"Germany",
		"France",
		"Japan",
		"Canada",
		"Australia",
		"Other",
	]

	const teamMemberData = [
		"Team Member 1",
		"Team Member 2",
		"Team Member 3",
		"Team Member 4",
	]

	const numberOfTravellersData = ["1", "2", "3", "4", "5", "6+"]

	const handleInputChange = (field: keyof HotelFormData, value: string) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}))
	}

	const handleSubmit = () => {
		if (onSubmit) {
			onSubmit(formData)
		}
		onClose()
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title="Hotel details"
			size="auto"
			centered
			classNames={{
				header: s.modalHeader,
				title: s.modalTitle,
				content: s.modalContent,
				body: s.modalBody,
			}}
		>
			<div className={s.formContainer}>
				<Grid gutter={32}>
					<Grid.Col span={isSmallScreen ? 12 : 6}>
						<Input
							label="Full name"
							placeholder="Please write your full name"
							defaultValue={formData.fullName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleInputChange("fullName", e.target.value)
							}
						/>
					</Grid.Col>

					<Grid.Col span={isSmallScreen ? 12 : 6}>
						<Select
							label="Citizenship"
							placeholder="Select country"
							data={citizenshipData}
							value={formData.citizenship}
							onChange={(value: string | null) =>
								handleInputChange("citizenship", value || "")
							}
						/>
					</Grid.Col>

					<Grid.Col span={isSmallScreen ? 12 : 6}>
						<Input
							label="E-mail"
							placeholder="Write down your e-mail"
							defaultValue={formData.email}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleInputChange("email", e.target.value)
							}
						/>
					</Grid.Col>

					<Grid.Col span={isSmallScreen ? 12 : 6}>
						<Select
							label="Phone number"
							placeholder="Select team member"
							data={teamMemberData}
							value={formData.phoneNumber}
							onChange={(value: string | null) =>
								handleInputChange("phoneNumber", value || "")
							}
						/>
					</Grid.Col>

					<Grid.Col span={isSmallScreen ? 12 : 6}>
						<Input
							label="Tour start date"
							placeholder="17.10.2024"
							defaultValue={formData.tourStartDate}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								handleInputChange("tourStartDate", e.target.value)
							}
						/>
					</Grid.Col>

					<Grid.Col span={isSmallScreen ? 12 : 6}>
						<Select
							label="Number of travellers"
							placeholder="2"
							data={numberOfTravellersData}
							value={formData.numberOfTravellers}
							onChange={(value: string | null) =>
								handleInputChange("numberOfTravellers", value || "2")
							}
						/>
					</Grid.Col>

					<Grid.Col span={12} className={s.commentWrap}>
						<p className={s.comments}>Comments</p>
						<Textarea
							label="Comments"
							placeholder="Please write your comment"
							minRows={4}
							maxRows={6}
							value={formData.comments}
							onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
								handleInputChange("comments", e.target.value)
							}
						/>
					</Grid.Col>
				</Grid>

				<div className={s.buttonContainer}>
					<Button onClick={handleSubmit} className={s.submitButton} size="lg">
						Send request
					</Button>
				</div>
			</div>
		</Modal>
	)
}
