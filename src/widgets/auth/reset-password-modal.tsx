import {
	Box,
	Button,
	Group,
	Modal,
	PasswordInput,
	Stack,
	Text,
} from "@mantine/core"
import React, { useState } from "react"

import IconChevronLeft from "@/shared/assets/images/chevron_right.svg"
import IconX from "@/shared/assets/images/close.svg"

import styles from "./auth.module.scss"

interface ResetPasswordModalProps {
	opened: boolean
	onClose: () => void
	onSubmit?: (newPassword: string, confirmPassword: string) => void
	title?: string
	isRegistration?: boolean
}

export const ResetPasswordModal: React.FC<ResetPasswordModalProps> = ({
	opened,
	onClose,
	onSubmit,
}) => {
	const [newPassword, setNewPassword] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		onSubmit?.(newPassword, confirmPassword)
		setNewPassword("")
		setConfirmPassword("")
		onClose()
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
			<Box className={styles.resetPasswordModalContent}>
				<Group className={styles.header}>
					<button onClick={onClose} className={styles.backButton}>
						<IconChevronLeft />
					</button>
					<Text className={styles.resetPasswordModalTitle}>Reset Password</Text>
					<button onClick={onClose} className={styles.closeButton}>
						<IconX />
					</button>
				</Group>

				<form onSubmit={handleSubmit} className={styles.resetPasswordModalForm}>
					<Stack gap="16px" mt="24px">
						<Stack gap={6} className={styles.resetPasswordModalInputGroup}>
							<Text
								size="sm"
								fw={500}
								className={styles.resetPasswordModalLabel}
							>
								New Password
							</Text>
							<PasswordInput
								value={newPassword}
								onChange={(e) => setNewPassword(e.currentTarget.value)}
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
						<Button
							type="submit"
							fullWidth
							className={styles.forgotPasswordResetButton}
              size="md"
              mt='24px'
						>
							Continue
						</Button>
					</Stack>
				</form>
			</Box>
		</Modal>
	)
}
