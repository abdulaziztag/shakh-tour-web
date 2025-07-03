import { Accordion, Box, Stack } from "@mantine/core"
import { StaticImageData } from "next/image"
import React from "react"

import hotelImage from "@/shared/assets/images/image.jpg"

import GuestHouseCard from "../../shared/ui/accommodation-card/index"
import classes from "./accomodation-accordion.module.scss"

interface TourItem {
	id: string
	title: string
	subtitle?: string
	description: string
	image?: StaticImageData
	hasAttentionGrabbing?: boolean
	hasAncientMonuments?: boolean
	hasFavouriteSpots?: boolean
}

interface GuestHouseData {
	id: string
	title: string
	address: string
	image: StaticImageData
	hasAirConditioning?: boolean
	hasFreeWifi?: boolean
	hasPrivateParking?: boolean
	hasTransfer?: boolean
}

interface TourAccordionProps {
	items: TourItem[]
	guesthouses?: GuestHouseData[]
}

export const TourAccordionAcc: React.FC<TourAccordionProps> = ({
	items,
	guesthouses,
}) => {
	const defaultGuesthouses: GuestHouseData[] = [
		{
			id: "1",
			title: "Reval Guesthouse",
			address: "2A Mirzakalon Ismoil Street, Tashkent",
			image: hotelImage,
			hasAirConditioning: true,
			hasFreeWifi: true,
			hasPrivateParking: true,
			hasTransfer: true,
		},
		{
			id: "2",
			title: "Reval Guesthouse",
			address: "2A Mirzakalon Ismoil Street, Tashkent",
			image: hotelImage,
			hasAirConditioning: true,
			hasFreeWifi: true,
			hasPrivateParking: true,
			hasTransfer: true,
		},
	]

	const guestHouseData = guesthouses || defaultGuesthouses

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
							<Stack className={classes.wrapCards}>
								{guestHouseData.map((guesthouse) => (
									<GuestHouseCard
										key={guesthouse.id}
										title={guesthouse.title}
										address={guesthouse.address}
										image={guesthouse.image}
										hasAirConditioning={guesthouse.hasAirConditioning}
										hasFreeWifi={guesthouse.hasFreeWifi}
										hasPrivateParking={guesthouse.hasPrivateParking}
										hasTransfer={guesthouse.hasTransfer}
									/>
								))}
							</Stack>
						</Accordion.Panel>
					</Accordion.Item>
				))}
			</Accordion>
		</Box>
	)
}
