import { Button, Group, Modal, Stack, Text, TextInput } from "@mantine/core"
import { FC, useState } from "react"

import IconArrowLeft from "@/shared/assets/images/arrow-left.svg"

import styles from "./auth.module.scss"

interface ForgotPasswordModalProps {
	opened: boolean
	onClose: () => void
	onReturnToSignIn: () => void
}

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
	opened,
	onClose,
	onReturnToSignIn,
}) => {
	const [email, setEmail] = useState("")
	// const [loading, setLoading] = useState(false)
	//
	// const handleResetPassword = async () => {
	// 	if (!email) return
	//
	// 	setLoading(true)
	// 	setTimeout(() => {
	// 		setLoading(false)
	// 		console.log("Password reset sent to:", email)
	// 	}, 2000)
	// }

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			centered
			size={500}
			classNames={{
				content: styles.forgotPasswordModal,
				// header: styles.forgotPasswordHeader,
				body: styles.forgotPasswordBody,
			}}
			withCloseButton={false}
			overlayProps={{
				backgroundOpacity: 0.7,
				// blur: 3,
			}}
		>
			<div className={styles.forgotPasswordContainer}>
				<Stack gap="32px">
					<div className={styles.forgotPasswordTitleSection}>
						<Text className={styles.forgotPasswordTitle}>Forgot password?</Text>
						<Text className={styles.forgotPasswordSubtitle}>
							Don't worry, we will send you instructions to reset your settings.
						</Text>
					</div>

					<Stack className={styles.forgotPasswordFormSection} gap={6}>
						<Text className={styles.forgotPasswordLabel}>Email</Text>
						<TextInput
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
							placeholder="Enter Email"
							classNames={{
								input: styles.forgotPasswordEmailInput,
							}}
						/>
					</Stack>

					<Button
						type="submit"
						fullWidth
						className={styles.forgotPasswordResetButton}
						size="md"
					>
						Reset password
					</Button>

					<Group
						justify="center"
						className={styles.forgotPasswordReturnSection}
						onClick={onReturnToSignIn}
					>
						<IconArrowLeft size={16} />
						<Text className={styles.forgotPasswordReturnText}>
							Return to sign in
						</Text>
					</Group>
				</Stack>
			</div>
		</Modal>
	)
}

export default ForgotPasswordModal
