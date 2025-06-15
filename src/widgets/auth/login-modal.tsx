import {
	Anchor,
	Box,
	Button,
	Group,
	Modal,
	PasswordInput,
	Stack,
	Text,
	TextInput,
} from "@mantine/core"
import { FC, useState } from "react"

import IconX from "@/shared/assets/images/close.svg"
import IconBrandGoogle from "@/shared/assets/images/google-icon.svg"
import IconChevronLeft from '@/shared/assets/images/chevron_right.svg'
import styles from "./auth.module.scss"

interface LoginModalProps {
	opened: boolean
	onClose: () => void
	onRegisterClick: () => void
	onForgotPasswordClick: () => void
}

const LoginModal:FC <LoginModalProps> = ({
	opened,
	onClose,
	onRegisterClick,
	onForgotPasswordClick,
}) => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log("Login:", { email, password })
	}

	const handleGoogleSignIn = () => {
		console.log("Google sign in")
	}
  
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			withCloseButton={false}
			centered
			size={492}
			fullScreen={false}
			radius={0}
			classNames={{
				header: styles.modal_header,
				content: styles.modal,
				body: styles.body,
			}}
			overlayProps={{
				backgroundOpacity: 0.7,
				// blur: 3,
			}}
		>
			<Box className={styles.container}>
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
					<Stack gap={24} className={styles.form}>
						<Stack gap={8}>
							<Text className={styles.label}>Email</Text>
							<TextInput
								value={email}
								onChange={(e) => setEmail(e.currentTarget.value)}
								placeholder="saldakhmatov@99@gmail.com"
								className={styles.textInput}
								classNames={{
									input: styles.input,
								}}
							/>
						</Stack>

						<Stack gap={8}>
							<Text className={styles.label}>Password</Text>
							<PasswordInput
								value={password}
								onChange={(e) => setPassword(e.currentTarget.value)}
								placeholder="••••••••"
								className={styles.textInput}
								classNames={{
									input: styles.input,
								}}
							/>
						</Stack>

						<Group justify="flex-start" className={styles.forgotPassword}>
							<Anchor
								onClick={onForgotPasswordClick}
								className={styles.forgotPasswordLink}
								size="sm"
							>
								Forgot password ?
							</Anchor>
						</Group>

						<Button
							type="submit"
							fullWidth
							className={styles.signInButton}
							size="md"
						>
							Sign in
						</Button>

						<Button
							fullWidth
							variant="outline"
							leftSection={<IconBrandGoogle size={20} />}
							onClick={handleGoogleSignIn}
							className={styles.googleButton}
							size="md"
						>
							Sign in with Google
						</Button>

						<Group justify="center" className={styles.registerSection}>
							<Text className={styles.registerText}>
								Don't have an account?{" "}
								<Anchor
									onClick={onRegisterClick}
									className={styles.registerLink}
								>
									Register
								</Anchor>
							</Text>
						</Group>
					</Stack>
				</form>
			</Box>
		</Modal>
	)
}

export default LoginModal
