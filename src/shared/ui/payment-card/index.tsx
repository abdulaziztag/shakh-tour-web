import { Box, Center, Group, Radio, Stack, Text } from "@mantine/core"
import React, { ReactNode } from "react"

import s from './payment-card.module.scss';

interface PaymentMethodCardProps {
	value: string
	active: boolean
	label: string
	subLabel?: string
	icon?: ReactNode
	onClick: (value: string) => void
}

export const PaymentMethodCard: React.FC<PaymentMethodCardProps> = ({
	value,
	active,
	label,
	subLabel,
	icon,
	onClick,
}) => {
	const renderIcons = () => {
		if (!icon) return null

		if (Array.isArray(icon)) {
			return (
				<Group mt="lg">
					{icon.map((item, idx) => (
						<Box key={idx}>{item}</Box>
					))}
				</Group>
			)
		}

		return <Center>{icon}</Center>
	}

	return (
		<Box
			p="xs"
			style={{
				border: "1px solid #e9ecef",
				borderRadius: "8px",
				cursor: "pointer",
				backgroundColor: "white",
				height: "100px",
			}}
			onClick={() => onClick(value)}
		>
      <Radio
        className={s.label}
				checked={active}
				label={label}
				variant={active ? "filled" : "outline"}
			/>

			{(icon || subLabel) && (
				<Stack align="center">
					{renderIcons()}

					{subLabel && (
						<Text size="sm" content="center" mt='lg' className={s.subLabel}>
							{subLabel}
						</Text>
					)}
				</Stack>
			)}
		</Box>
	)
}
