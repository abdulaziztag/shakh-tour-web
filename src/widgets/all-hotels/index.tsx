import { Accordion, Box, Flex, Grid, Text } from "@mantine/core"
import React from "react"

import { Checkbox, Radio, RangeSlider, RecommendedHotels } from "@/shared/ui"
import { LightButton } from "@/shared/ui/buttons"

import s from "./all-hotels.module.scss"

export const AllHotels = () => {
	return (
		<>
			<Box className={s.allHotels}>
				<Grid>
					<Grid.Col span={4}>
						<Box className={s.allTourLeft}>
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
						</Box>
					</Grid.Col>
					<Grid.Col span={8}>
						<RecommendedHotels titleButton={"View details"} />
					</Grid.Col>
				</Grid>
			</Box>
		</>
	)
}
