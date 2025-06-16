import { Input as InputCustom } from "@mantine/core"
import React, { FC } from "react"

import s from "./input.module.scss"

interface InputProps {
	label?: string
	description?: string
	error?: string
	placeholder?: string
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	defaultValue?: string
	type?: React.HTMLInputTypeAttribute
}

export const Input: FC<InputProps> = ({
	label,
	description,
	error,
	placeholder,
	value,
	onChange,
	defaultValue,
	type = "text",
}) => {
	return (
		<InputCustom.Wrapper
			label={label}
			description={description}
			error={error}
			classNames={{
				label: s.inputLabel,
				description: s.inputDescription,
				error: s.inputError,
			}}
		>
			<InputCustom
				placeholder={placeholder}
				className={s.input}
				value={value}
				onChange={onChange}
				defaultValue={defaultValue}
				type={type}
			/>
		</InputCustom.Wrapper>
	)
}
