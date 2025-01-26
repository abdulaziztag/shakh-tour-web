import { Accordion, Flex, Text } from "@mantine/core"
import React, { FC } from "react"

import IconLeft from "@/shared/assets/images/chevron-left.svg"
import { Checkbox, Radio, RangeSlider } from "@/shared/ui"
import { LightButton } from "@/shared/ui/buttons"

import s from "./all-hotel-filter.module.scss"

interface IAllHotelFilterProps {
	onclickBack?: () => void
}

export const AllHotelFilter: FC<IAllHotelFilterProps> = ({ onclickBack }) => {
	return (
		<>
			<Text component={"p"} className={s.pageHeaderBack} onClick={onclickBack}>
				<IconLeft />
				Back
			</Text>
			<Text component={"p"} className={s.pageHeaderTitle}>
				Filter
			</Text>
			<Accordion
				variant="contained"
				classNames={{
					root: s.accordionRoot,
					item: s.accordionItem,
					panel: s.accordionPanel,
					content: s.accordionContent,
					control: s.accordionControl,
				}}
				value={["1", "2", "3", "4"] as any}
			>
				<Accordion.Item value="2">
					<Accordion.Control>
						<Text component={"p"} className={s.accordionControlTitle}>
							Sort
						</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<Flex direction={"column"} gap={"1.25rem"}>
							<Radio label={"Best Offers"} />
							<Radio label={"Cheapest"} />
							<Radio label={"Most Expensive"} />
							<Radio label={"By Time"} />
							<Radio label={"By Arrival Time"} />
							<Radio label={"By Continuation of the Road"} />
						</Flex>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="1">
					<Accordion.Control>
						<Text component={"p"} className={s.accordionControlTitle}>
							Near Centre
						</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<RangeSlider />
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="3">
					<Accordion.Control>
						<Text component={"p"} className={s.accordionControlTitle}>
							Attention-grabbing Places
						</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<Flex direction={"column"} gap={"1.25rem"}>
							<Checkbox label={"Amir Temur Monument"} />
							<Checkbox label={"Independence Square"} />
							<Checkbox label={"Uzbekistan History Museum"} />
							<Checkbox label={"Oloy Bazaar"} />
							<Checkbox label={"Tashkent City"} />
						</Flex>
					</Accordion.Panel>
				</Accordion.Item>
				<Accordion.Item value="4">
					<Accordion.Control>
						<Text component={"p"} className={s.accordionControlTitle}>
							Tour Destinations
						</Text>
					</Accordion.Control>
					<Accordion.Panel>
						<Flex direction={"column"} gap={"1.25rem"}>
							<Checkbox label={"Amir Temur Monument"} />
							<Checkbox label={"Independence Square"} />
							<Checkbox label={"Uzbekistan History Museum"} />
							<Checkbox label={"Oloy Bazaar"} />
							<Checkbox label={"Tashkent City"} />
						</Flex>
						<Flex className={s.accordionItemFilterWrapper}>
							<LightButton className={s.filterButton}>
								Clear the Filter
							</LightButton>
						</Flex>
					</Accordion.Panel>
				</Accordion.Item>
			</Accordion>
		</>
	)
}
