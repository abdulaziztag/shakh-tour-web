import { Accordion, Box, Group, Image, Text } from "@mantine/core"
import React from "react"

import classes from "./accordion.module.scss"

interface TourItem {
	id: string
	title: string
	description: string
	image?: string
	hasAttentionGrabbing?: boolean
	hasAncientMonuments?: boolean
	hasFavouriteSpots?: boolean
}

interface TourAccordionProps {
	items: TourItem[]
}

export const TourAccordion: React.FC<TourAccordionProps> = ({ items }) => {

	return (
		<Box>
			<Accordion
				variant="separated"
				classNames={{
					root: classes.accordionRoot,
					item: classes.accordionItem,
					control: classes.accordionControl,
					content: classes.accordionContent,
					chevron: classes.accordionChevron,
				}}
			>
				{items.map((item) => (
					<Accordion.Item key={item.id} value={item.id}>
						<Accordion.Control>{item.title}</Accordion.Control>
						<Accordion.Panel>
							<Group align="flex-start">
								{item.image ? (
									<Image
										src={item.image}
										alt={item.title}
										w={120}
										h={80}
										radius="md"
										className={classes.tourImage}
									/>
								) : (
									<Box className={classes.placeholderBox}>
										{/* <IconEye size={24} color="#999" /> */}
									</Box>
								)}

								<Box>
									<Text size="sm" className={classes.tourDescription}>
										{item.description}
									</Text>
								</Box>
							</Group>
						</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion>
		</Box>
	)
}
