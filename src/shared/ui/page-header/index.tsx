import { Box, Flex, Input, RangeSlider, Text } from "@mantine/core"
import cx from "clsx"
import React, { useState } from "react"

import IconLeft from "@/shared/assets/images/chevron-left.svg"
import IconLayoutAlt from "@/shared/assets/images/layout-alt.svg"
import IconList from "@/shared/assets/images/list.svg"
import IconSearch from "@/shared/assets/images/search-lg.svg"

import s from "./page-header.module.scss"

export const PageHeader = () => {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
	return (
		<Box className={s.pageHeader}>
			<Text component={"p"} className={s.pageHeaderBack}>
				<IconLeft />
				Back
			</Text>
			<Flex justify={"space-between"}>
				<Text component={"h1"} className={s.pageHeaderTitle}>
					All Tours
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
			<Text size="sm">Tour Price</Text>
			<Text size="xs" color="dimmed">
				Total: {priceRange[0]} million UZS - {priceRange[1]} million UZS
			</Text>
			<RangeSlider
				value={priceRange}
				onChange={setPriceRange}
				min={0}
				max={50}
				step={1}
				marks={[
					{ value: 0, label: "0 UZS" },
					{ value: 50, label: "50 UZS" },
				]}
				mt="sm"
			/>
		</Box>
	)
}
