import { Box, Flex, Grid, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import { Input, Select, Textarea } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./about-form.module.scss"

export const AboutForm = () => {
	const matches = useMediaQuery("(max-width: 845px)")

	return (
		<Flex gap={"2rem"} direction={"column"}>
			<Box>
				<Text component={"h3"} className={s.aboutFormTitle}>
					Contact details
				</Text>
				<Grid>
					<Grid.Col span={matches ? 12 : 6}>
						<Input label={"Full name"} placeholder={"Write down first name"} />
					</Grid.Col>
					<Grid.Col span={matches ? 12 : 6}>
						<Select
							data={["Option 1", "Option 2", "Option 3"]}
							label={"Citizenship"}
							placeholder={"Select your citizenship"}
						/>
					</Grid.Col>
					<Grid.Col span={matches ? 12 : 6}>
						<Input label={"E-mail"} placeholder={"Write down your e-mail"} />
					</Grid.Col>
					<Grid.Col span={matches ? 12 : 6}>
						<Select
							data={["Option 1", "Option 2", "Option 3"]}
							label={"Phone number"}
							placeholder={"Select team member"}
						/>
					</Grid.Col>
				</Grid>
			</Box>
			<Box>
				<Text component={"h3"} className={s.aboutFormTitle}>
					Tour details
				</Text>
				<Grid>
					<Grid.Col span={matches ? 12 : 6}>
						<Select
							data={["Option 1", "Option 2", "Option 3"]}
							label={"Tour start date"}
							placeholder={"17.10.2024"}
						/>
					</Grid.Col>
					<Grid.Col span={matches ? 12 : 6}>
						<Select
							data={["Option 1", "Option 2", "Option 3"]}
							label={"Number of travellers"}
							placeholder={"2"}
						/>
					</Grid.Col>
					<Grid.Col span={12}>
						<Textarea label={"Comments"} placeholder={"Select team member"} />
					</Grid.Col>
				</Grid>
				<Flex justify={"flex-end"}>
					<FilledButton className={s.aboutFormButton}>
						Send a request
					</FilledButton>
				</Flex>
			</Box>
		</Flex>
	)
}
