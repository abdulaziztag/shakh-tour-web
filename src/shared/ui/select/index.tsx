import IconLogo from "@//shared/assets/images/chevron-down.svg"
import { Select as SelectCustom } from "@mantine/core"
import React, { FC } from "react"

import s from "./select.module.scss"

interface SelectProps {
	label?: string
	placeholder?: string
	data: string[]
	error?: string
	description?: string
	withAsterisk?: boolean
}

export const Select: FC<SelectProps> = ({
	label,
	placeholder,
	data,
	error,
	description,
	withAsterisk = false,
}) => {
	return (
		<>
			<SelectCustom
				label={label}
				placeholder={placeholder}
				data={data}
				error={error}
				description={description}
				withAsterisk={withAsterisk}
				className={s.select}
				classNames={{
					label: s.selectLabel,
					option: s.selectOption,
				}}
				rightSection={<IconLogo />}
			/>
		</>
	)
}
