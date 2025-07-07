import { Box } from "@mantine/core"
import React from "react"

import { Input, Select, Textarea } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./tour-request-form.module.scss"

const TourRequestForm = () => {
	return (
		<Box className={s.container}>
			<h1 className={s.title}>Tour request</h1>

			<h2 className={s.sectionTitle}>Contact details</h2>
			<div className={s.row}>
				<Input placeholder="Write down first name" label="Full name" />
				<Select
					placeholder="Select country"
					label="Citizenship"
					data={["Uzbekistan", "USA", "Germany", "Japan"]}
				/>
			</div>

			<div className={s.row}>
				<Input placeholder="Write down your e-mail" label="E-mail" />
				<Select
					placeholder="Select team member"
					label="Phone number"
					data={["+998 90 123 45 67", "+1 234 567 890", "+49 123 4567"]}
				/>
			</div>

			<h2 className={s.sectionTitle}>Tour details</h2>
			<div className={s.row}>
				<Input placeholder="17.10.2024" label="Tour start date" />
				<Select
					placeholder="2"
					label="Number of travelers"
					data={["1", "2", "3", "4", "5"]}
				/>
			</div>

			<div className={s.commentWrap}>
				<p className={s.comments}>Comments</p>
				<Textarea
					label="Comments"
					placeholder="Please write your comment"
					minRows={4}
					maxRows={6}
				/>
			</div>

			<div className={s.footer}>
				<FilledButton className={s.submitBtn}>Send a request</FilledButton>
			</div>
		</Box>
	)
}

export default TourRequestForm
