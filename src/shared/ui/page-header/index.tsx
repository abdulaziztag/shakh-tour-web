import { Box, Flex, Input, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import cx from "clsx"
import React, { FC } from "react"

import IconLeft from "@/shared/assets/images/chevron-left.svg"
import IconFilter from "@/shared/assets/images/filter-lines.svg"
import IconLayoutAlt from "@/shared/assets/images/layout-alt.svg"
import IconList from "@/shared/assets/images/list.svg"
import IconSearch from "@/shared/assets/images/search-lg.svg"

import s from "./page-header.module.scss"

interface IPageHeaderProps {
	title: string
	onClickFilter?: () => void
}

export const PageHeader: FC<IPageHeaderProps> = ({ title, onClickFilter }) => {
	const matches = useMediaQuery("(max-width: 992px)")
	return (
		<Box className={s.pageHeader}>
			<Text component={"p"} className={s.pageHeaderBack}>
				<IconLeft />
				Back
			</Text>
			<Flex
				justify={"space-between"}
				direction={matches ? "column" : "row"}
				gap={matches ? "1rem" : "0"}
			>
				<Text component={"h1"} className={s.pageHeaderTitle}>
					{title}
				</Text>
				<Flex align={"center"} gap={"1.5rem"}>
					<Input
						leftSection={<IconSearch />}
						placeholder={"Search"}
						className={s.pageHeaderSearch}
					/>
					<Flex className={s.pageHeaderListWrapper}>
						<Box className={cx(s.pageHeaderList, s.active)}>
							<IconLayoutAlt />
						</Box>
						<Box className={cx(s.pageHeaderList)}>
							<IconList />
						</Box>
					</Flex>
					{matches && (
						<Box className={s.pageHeaderFilter} onClick={onClickFilter}>
							<IconFilter />
						</Box>
					)}
				</Flex>
			</Flex>
		</Box>
	)
}
