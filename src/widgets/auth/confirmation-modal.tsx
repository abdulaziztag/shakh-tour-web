import { Button, Group, Modal, Text } from "@mantine/core"
import React, { FC, useEffect, useRef, useState } from "react"

import IconChevronLeft from "@/shared/assets/images/chevron_right.svg"
import IconX from "@/shared/assets/images/close.svg"

import s from "./auth.module.scss"

interface ConfirmCodeModalProps {
	opened: boolean
	onClose: () => void
	email: string
	onSubmit: (code: string) => void
	onResendCode?: () => void
}

export const ConfirmCodeModal: FC<ConfirmCodeModalProps> = ({
	opened,
	onClose,
	email,
	onSubmit,
	onResendCode,
}) => {
	const [code, setCode] = useState<string[]>(["", "", "", ""])
	const [timer, setTimer] = useState(30)
	const [canResend, setCanResend] = useState(false)
	const inputRefs = useRef<(HTMLInputElement | null)[]>([])

	const handleChange = (index: number, value: string) => {
		if (!/^\d?$/.test(value)) return
		const updatedCode = [...code]
		updatedCode[index] = value
		setCode(updatedCode)

		if (value && index < 3) {
			inputRefs.current[index + 1]?.focus()
		}
	}

	const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
		if (e.key === "Backspace" && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
	}

	const handleSubmit = () => {
		onSubmit(code.join(""))
	}

	const handleResendCode = () => {
		if (canResend && onResendCode) {
			onResendCode()
			setTimer(30)
			setCanResend(false)
			setCode(["", "", "", ""])
		}
	}

	useEffect(() => {
		if (!opened) {
			setCode(["", "", "", ""])
			setTimer(30)
			setCanResend(false)
		} else {
			setTimeout(() => {
				inputRefs.current[0]?.focus()
			}, 100)
		}
	}, [opened])

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer((prev) => {
					if (prev <= 1) {
						setCanResend(true)
						return 0
					}
					return prev - 1
				})
			}, 1000)
			return () => clearInterval(interval)
		}
	}, [timer])

	const isCodeComplete = code.every((c) => c !== "")
	const hasAnyInput = code.some((c) => c !== "")

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			centered
			withCloseButton={false}
			radius={24}
			size={500}
			styles={{
				// modal: {
				// 	width: 500,
				// 	height: 418,
				// },
				body: {
					padding: 0,
				},
			}}
		>
			<div className={s.confirmation}>
				<Group className={s.header}>
					<button onClick={onClose} className={s.backButton}>
						<IconChevronLeft size={20} />
					</button>
					<Text className={s["confirmation__title"]}>Confirmation code</Text>
					<button onClick={onClose} className={s.closeButton}>
						<IconX />
					</button>
				</Group>
				<Text className={s["confirmation__subtitle"]}>
					We have sent a verification code to{" "}
					<span className={s["confirmation__email"]}>{email}</span>
					{hasAnyInput
						? ". Please enter this code in the fields below"
						: ", please enter this code below"}
				</Text>

				<div className={s["confirmation__inputs"]}>
					{code.map((digit, index) => (
						<input
							key={index}
							ref={(el: any) => (inputRefs.current[index] = el)}
							className={`${s["confirmation__input"]} ${
								digit ? s["confirmation__input--filled"] : ""
							}`}
							type="text"
							inputMode="numeric"
							maxLength={1}
							value={digit}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyDown(index, e)}
						/>
					))}
				</div>

				{!canResend && (
					<Text className={s["confirmation__retry-text"]}>
						Retry code request is available in {timer} seconds
					</Text>
				)}

				{canResend && (
					<button
						className={s["confirmation__resend-button"]}
						onClick={handleResendCode}
					>
						Resend Code
					</button>
				)}

				{/* <Button
					className={`${s["confirmation__button"]} ${
						isCodeComplete ? s["confirmation__button--active"] : ""
					}`}
					disabled={!isCodeComplete}
					onClick={handleSubmit}
				>
					Continue
				</Button> */}
				<Button
					type="submit"
					fullWidth
					disabled={!isCodeComplete}
					onClick={handleSubmit}
					className={s.registerContinueButton}
					mt="24px"
				>
					Continue
				</Button>
			</div>
		</Modal>
	)
}
