import { Box, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import React, { FC } from "react"

import IconLeft from "@/shared/assets/images/chevron-left.svg"
import IconLayoutAlt from "@/shared/assets/images/layout-alt.svg"
import IconList from "@/shared/assets/images/list.svg"
import IconSearch from "@/shared/assets/images/search-lg.svg"

import s from "./page-header.module.scss"

interface IPageHeaderProps {
	title: string
}

export const PageHeader: FC<IPageHeaderProps> = ({ title }) => {
	return (
		<Box className={s.pageHeader}>
			<Text component={"p"} className={s.pageHeaderBack}>
				<IconLeft />
				Back
			</Text>
			<Flex justify={"space-between"}>
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
				</Flex>
			</Flex>
		</Box>
	)
}
