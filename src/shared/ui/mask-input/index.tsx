import { Input as InputCustom } from "@mantine/core"
import React, { FC, useRef } from "react"
import { IMaskMixin, IMaskMixinProps } from "react-imask"

import s from "./index.module.scss"

type MaskProps = IMaskMixinProps<HTMLInputElement> & {
	id?: string
	className?: string
	placeholder?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

interface IPhoneInputProps {
	phoneNumber: {
		label?: string
		onChange: (e: string) => void
		value?: string
	}
	error?: string
	id?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PhoneInput: FC<IPhoneInputProps> = (props) => {
	return (
		<InputCustom.Wrapper
			label={props.phoneNumber.label}
			error={props.error}
			classNames={{
				label: s.inputLabel,
				error: s.inputError,
			}}
		>
			<InputMask
				id={props.id}
				value={props.phoneNumber.value}
				onAccept={(_, maskRef) => {
					props.phoneNumber.onChange(maskRef.unmaskedValue)
				}}
				onBlur={props.onBlur}
				mask={"+{998} (00) 000-00-00"}
				// placeholderChar={"•"}
				lazy={false}
				placeholder="+998 "
				className={s.input}
			/>
		</InputCustom.Wrapper>
	)
}

export const InputMask: FC<MaskProps> = (props) => {
	const ref = useRef(null)
	return <MaskedStyledInput ref={ref} inputValue={props.value} {...props} />
}

const MaskedStyledInput = IMaskMixin(
	({ inputRef, id, inputValue, onBlur, className, placeholder, ...props }) => {
		return (
			<input
				ref={inputRef as any}
				type="text"
				id={id}
				autoComplete="off"
				placeholder={placeholder}
				value={inputValue as string}
				onBlur={onBlur}
				className={className}
				{...props}
			/>
		)
	},
)
