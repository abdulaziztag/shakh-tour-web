import { Textarea as TextareaCustom } from "@mantine/core"
import React, { FC } from "react"

import s from "./textarea.module.scss"

interface TextareaProps {
	label?: string
	description?: string
	placeholder?: string
	minRows?: number
	maxRows?: number
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
	defaultValue?: string
}

export const Textarea: FC<TextareaProps> = ({
	label,
	description,
	placeholder,
	minRows,
	maxRows,
	value,
	onChange,
	defaultValue,
}) => {
	return (
		<>
			<TextareaCustom
				label={label}
				description={description}
				placeholder={placeholder}
				className={s.textarea}
				minRows={minRows}
				maxRows={maxRows}
				value={value}
				onChange={onChange}
				defaultValue={defaultValue}
			/>
		</>
	)
}
