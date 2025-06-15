import { Anchor, Box, Button, Group, Modal, Stack, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";



import IconChevronLeft from '@/shared/assets/images/chevron_right.svg';
import IconX from "@/shared/assets/images/close.svg"
import IconBrandGoogle from "@/shared/assets/images/google-icon.svg"


import styles from "./auth.module.scss";





interface RegisterModalProps {
	opened: boolean
	onClose: () => void
	onSignInClick: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({
	opened,
	onClose,
	onSignInClick,
}) => {
	const [email, setEmail] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Register:", { email })
	}

	const handleGoogleSignUp = () => {
		console.log("Google sign up")
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			withCloseButton={false}
			centered
			size={492}
			classNames={{
				// modal: styles.registerModal,
				content: styles.registerModal,
				body: styles.registerBody,
			}}
			overlayProps={{
				backgroundOpacity: 0.5,
				blur: 3,
			}}
		>
			<Box className={styles.registerContainer}>
      <Group  className={styles.header}>
					<button onClick={onClose} className={styles.backButton}>
						<IconChevronLeft size={20} />
					</button>
					<Text className={styles.title}>Sign in</Text>
					<button onClick={onClose} className={styles.closeButton}>
						<IconX />
					</button>
				</Group>

				<form onSubmit={handleSubmit}>
					<Stack gap={24} className={styles.registerForm}>
						<Stack gap={8}>
							<Text className={styles.registerLabel}>Email*</Text>
							<TextInput
								value={email}
								onChange={(e) => setEmail(e.currentTarget.value)}
								placeholder="Enter Email"
								className={styles.registerTextInput}
								classNames={{
									input: styles.registerInput,
								}}
							/>
						</Stack>

						<Button
							type="submit"
							fullWidth
							className={styles.registerContinueButton}
							size="md"
						>
							Continue
						</Button>

						<Button
							fullWidth
							variant="outline"
							leftSection={<IconBrandGoogle size={20} />}
							onClick={handleGoogleSignUp}
							className={styles.registerGoogleButton}
							size="md"
						>
							Continue with Google
						</Button>

						<Group justify="center" className={styles.registerSignInSection}>
							<Text className={styles.registerSignInText}>
								Already have an account?{" "}
								<Anchor
									onClick={onSignInClick}
									className={styles.registerSignInLink}
								>
									Sign in
								</Anchor>
							</Text>
						</Group>
					</Stack>
				</form>
			</Box>
		</Modal>
	)
}

export default RegisterModal