import { Accordion, Box } from "@mantine/core"
import React from "react"

import AccordionDetailCard from "../../shared/ui/accordion-detail-card/index"
import classes from "./accordion.module.scss"

interface TourItem {
	id: string
	title: string
	subtitle?: string
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
							<AccordionDetailCard item={item} />
						</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion>
		</Box>
	)
}
