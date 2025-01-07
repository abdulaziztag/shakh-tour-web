import { Radio as RadioCustom } from "@mantine/core"
import React, { FC } from "react"

import s from "./radio.module.scss"

interface IRadioProps {
	label: string
	variant?: "filled" | "outline" | string
}

export const Radio: FC<IRadioProps> = ({ label, variant = "outline" }) => {
	return (
		<>
			<RadioCustom
				label={label}
				variant={variant}
				classNames={{
					root: s.radioRoot,
					label: s.radioLabel,
					icon: s.radioIcon,
				}}
			/>
		</>
	)
}
