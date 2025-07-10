import { Box, Grid, Text, Textarea, Title } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import { FC } from "react"

import { Input } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./contact-form.module.scss"

const ContactForm: FC = () => {
	const isMobile = useMediaQuery("(max-width: 768px)")

	return (
		<Box w={isMobile ? "100%" : 540} mx="auto">
			<Title className={s.contactTitle}>Contact Us</Title>
			<Text className={s.contactText} mt={16}>
				Got questions? Just drop us a message!
			</Text>

			<form>
				<Grid gutter="md" mt={24}>
					<Grid.Col span={12}>
						<Input label="Name" placeholder="Enter name" />
					</Grid.Col>

					<Grid.Col span={12} mt={12}>
						<Input label="Email" placeholder="Enter Email" />
					</Grid.Col>

					<Grid.Col span={12} mt={12}>
						<Text color="#344054" fs="14px" fw={500} mb={6}>
							Comment
						</Text>
						<Textarea
							label=""
							placeholder="Leave a comment"
							minRows={4}
							maxRows={6}
						/>
					</Grid.Col>

					<Grid.Col span={12} mt={16}>
						<FilledButton w="100%" h={48}>
							Send
						</FilledButton>
					</Grid.Col>
				</Grid>
			</form>
		</Box>
	)
}

export default ContactForm
