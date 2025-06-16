import {
	Box,
	Button,
	Group,
	Modal,
	PasswordInput,
	Select,
	Stack,
	Text,
	TextInput,
} from "@mantine/core"
import React, { useState } from "react"

import IconChevronLeft from "@/shared/assets/images/chevron_right.svg"
import IconX from "@/shared/assets/images/close.svg"

import styles from "./auth.module.scss"

interface RegistrationDetailProps {
	opened: boolean
	onClose: () => void
	onSubmit?: (form: {
		password: string
		confirmPassword: string
		country: string
		name: string
	}) => void
}

export const RegistrationDetail: React.FC<RegistrationDetailProps> = ({
	opened,
	onClose,
	onSubmit,
}) => {
	const [password, setPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")
	const [country, setCountry] = useState("")
	const [name, setName] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSubmit?.({ password, confirmPassword, country, name })
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			withCloseButton={false}
			centered
			size={500}
			classNames={{
				content: styles.resetPasswordModal,
				body: styles.resetPasswordModalInner,
			}}
			overlayProps={{
				backgroundOpacity: 0.7,
			}}
		>
			<Box className={styles.registrationDetailContent}>
				<Group className={styles.header} mb="32px">
					<button onClick={onClose} className={styles.backButton}>
						<IconChevronLeft />
					</button>
					<Text className={styles.resetPasswordModalTitle}>Reset Password</Text>
					<button onClick={onClose} className={styles.closeButton}>
						<IconX />
					</button>
				</Group>

				<form onSubmit={handleSubmit}>
					<Stack gap="md">
						<Stack gap={6} className={styles.resetPasswordModalInputGroup}>
							<Text
								size="sm"
								fw={500}
								className={styles.resetPasswordModalLabel}
							>
								New Password
							</Text>
							<PasswordInput
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								placeholder="Enter password"
								className={styles.textInput}
								classNames={{
									input: styles.input,
								}}
							/>
						</Stack>

            <Stack gap={6} className={styles.resetPasswordModalInputGroup}>
							<Text
								size="sm"
								fw={500}
								className={styles.resetPasswordModalLabel}
							>
								Confirm Password
							</Text>
							<PasswordInput
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.currentTarget.value)}
								placeholder="Confirm Password"
								className={styles.textInput}
								classNames={{
									input: styles.input,
								}}
							/>
						</Stack>
						<Stack gap={6}>
							<Text className={styles.label}>Country</Text>
							<TextInput
								value={name}
								onChange={(e) => setName(e.currentTarget.value)}
								placeholder="Enter name"
								className={styles.textInput}
								classNames={{
									input: styles.input,
								}}
							/>
						</Stack>

            <Stack gap={6}>
							<Text className={styles.label}>Name</Text>
							<TextInput
								value={name}
								onChange={(e) => setName(e.currentTarget.value)}
								placeholder="Enter name"
								className={styles.textInput}
								classNames={{
									input: styles.input,
								}}
							/>
						</Stack>

						<Button
							type="submit"
							fullWidth
							className={styles.forgotPasswordResetButton}
							size="md"
							mt="24px"
						>
							Continue
						</Button>
					</Stack>
				</form>
			</Box>
		</Modal>
	)
}
