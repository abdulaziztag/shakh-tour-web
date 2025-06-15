import { Button, Modal, Text } from "@mantine/core"
import React, { FC, useEffect, useRef, useState } from "react"

import s from "./auth.module.scss"

interface ConfirmCodeModalProps {
	opened: boolean
	onClose: () => void
	email: string
	onSubmit: (code: string) => void
}

export const ConfirmCodeModal: FC<ConfirmCodeModalProps> = ({
	opened,
	onClose,
	email,
	onSubmit,
}) => {
	const [code, setCode] = useState<string[]>(["", "", "", ""])
	const [timer, setTimer] = useState(30)
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

	useEffect(() => {
		if (!opened) {
			setCode(["", "", "", ""])
			setTimer(30)
		}
	}, [opened])

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer((prev) => (prev > 0 ? prev - 1 : 0))
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			centered
			withCloseButton={false}
			radius="lg"
			size="sm"
		>
			<div className={s.confirmation}>
				<div className={s["confirmation__title"]}>Confirmation code</div>
				<Text className={s["confirmation__subtitle"]}>
					We have sent a verification code to <strong>{email}</strong>, please
					enter this code below
				</Text>

				<div className={s["confirmation__inputs"]}>
					{code.map((digit, index) => (
						<input
							key={index}
							// ref={(el) => (inputRefs.current[index] = el)}
							className={s["confirmation__input"]}
							type="text"
							inputMode="numeric"
							maxLength={1}
							value={digit}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handleKeyDown(index, e)}
						/>
					))}
				</div>

				<Text className={s["confirmation__retry-text"]}>
					Retry code request is available in {timer} seconds
				</Text>

				<Button
					className={s["confirmation__button"]}
					disabled={code.some((c) => c === "")}
					onClick={handleSubmit}
				>
					Continue
				</Button>
			</div>
		</Modal>
	)
}
