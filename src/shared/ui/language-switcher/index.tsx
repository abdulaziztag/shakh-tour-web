import IconArrow from "@//shared/assets/images/lang-arrow.svg"
import { Box, Flex, Popover, Text } from "@mantine/core"
import setLanguage from "next-translate/setLanguage"
import React, { FC, useEffect, useState } from "react"

import s from "./language-switcher.module.scss"

interface LanguageSwitcherProps {
	position?:
		| "left"
		| "right"
		| "top"
		| "bottom"
		| "left-start"
		| "left-end"
		| "right-start"
		| "right-end"
		| "top-start"
		| "top-end"
		| "bottom-start"
		| "bottom-end"
	direction?: "row" | "column"
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({
	position,
	direction,
}) => {
	const [selectedLang, setSelectedLang] = useState("ru")

	useEffect(() => {
		const language = localStorage.getItem("lang")
		if (language) {
			setSelectedLang(language)
		}
	}, [])

	const mobileLang = [
		{
			value: "ru",
			label: "Русский",
		},
		{
			value: "uz",
			label: "Oʻzbek",
		},
	]
	return (
		<>
			<Popover
				width={300}
				trapFocus
				position={position}
				offset={{ mainAxis: 2 }}
			>
				<Popover.Target>
					<Box className={s.sidebarBoxWrapper}>
						<Text component={"p"} className={s.sidebarBoxRowLang}>
							{mobileLang.find((item) => item.value === selectedLang)?.label}
							<IconArrow />
						</Text>
					</Box>
				</Popover.Target>
				<Popover.Dropdown className={s.sidebarBoxRowDropdown}>
					<Flex
						gap={"0.12rem"}
						align={"flex-start"}
						justify={"flex-start"}
						direction={direction}
					>
						{mobileLang.map((item, index) => (
							<Box
								key={index}
								className={s.sidebarBoxRowDropdownItem}
								onClick={() => {
									setLanguage(item.value)
									setSelectedLang(item.value)
									localStorage.setItem("lang", item.value)
								}}
							>
								<Text component={"p"} className={s.sidebarBoxText}>
									{item.label}
								</Text>
							</Box>
						))}
					</Flex>
				</Popover.Dropdown>
			</Popover>
		</>
	)
}
