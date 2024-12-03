import { Box, Flex, TextInputProps } from "@mantine/core"
import React, { FC, useRef } from "react"
import { IMaskMixin, IMaskMixinProps } from "react-imask"

import s from "./index.module.scss"

type MaskProps = IMaskMixinProps<HTMLInputElement> & TextInputProps

interface ICardInputProps {
	phoneNumber: {
		label?: string
		onChange: (e: string) => void
		value?: string
	}
	error: React.ReactNode
	id?: string
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const PhoneInput = (props: ICardInputProps) => {
	return (
		<Flex gap={"0.5rem"} wrap={"wrap"} direction={"column"}>
			<Box className={s.inputCard}>
				<InputMask
					label={props.phoneNumber.label}
					id={props.id}
					value={props.phoneNumber.value}
					onAccept={(_, maskRef) => {
						props.phoneNumber.onChange(maskRef.unmaskedValue)
					}}
					onBlur={props.onBlur}
					mask={"+{998} (00) 000-00-00"}
					placeholderChar={"•"}
					lazy={false}
					error={props.error}
				/>
			</Box>
		</Flex>
	)
}
export const InputMask: FC<MaskProps> = (props) => {
	const ref = useRef(null)
	return (
		<MaskedStyledInput
			ref={ref}
			inputValue={props.value}
			error={props.error}
			onBlur={props.onBlur}
			{...props}
		/>
	)
}

const MaskedStyledInput = IMaskMixin(
	({ inputRef, label, id, inputValue, onBlur, error, ...props }) => {
		return (
			<>
				<div className={s.formItem}>
					<input
						ref={inputRef as any}
						type="text"
						id={id}
						autoComplete="off"
						placeholder={props.placeholder}
						value={inputValue as string}
						aria-invalid={!!error}
						onBlur={onBlur}
						{...props}
					/>
					{/*<label*/}
					{/*	htmlFor={id}*/}
					{/*	className={cx(s.label, {*/}
					{/*		[s.errorLabel]: error,*/}
					{/*	})}*/}
					{/*>*/}
					{/*	{label}*/}
					{/*</label>*/}
					{(error as React.ReactNode) && (
						<div className={s.errorIcon}>{/*<IconError />*/} Error Icon</div>
					)}
				</div>
				{(error as React.ReactNode) && (
					<div className={s.errorMessage}>{error as React.ReactNode}</div>
				)}
			</>
		)
	},
)
