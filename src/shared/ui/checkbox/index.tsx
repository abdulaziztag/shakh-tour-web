import { Box, Checkbox as CheckboxCustom, Text } from "@mantine/core"
import React, { FC } from "react"

import s from "./checkbox.module.scss"

interface ICheckboxProps {
	label: string
}

export const Checkbox: FC<ICheckboxProps> = ({ label }) => {
	return (
		<Box className={s.checkbox}>
			<CheckboxCustom
				defaultChecked
				label={label}
				classNames={{
					root: s.checkboxRoot,
					label: s.checkboxLabel,
					icon: s.checkboxIcon,
				}}
			/>
			<Text component={"p"} className={s.checkboxInfo}>
				54 units
			</Text>
		</Box>
	)
}
