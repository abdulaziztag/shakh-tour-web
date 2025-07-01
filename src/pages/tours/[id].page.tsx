import { Box, Container, Group, Tabs, Text, Title } from "@mantine/core"
import { FC, useState } from "react"

import { Layout } from "@/widgets"

import hiltonImage from "@/shared/assets/images/hotel-detail/image (3).png"
import spaCenterImage from "@/shared/assets/images/hotel-detail/image (4).png"
import hotelImage from "@/shared/assets/images/hotel-detail/image (5).png"
import { TourAccordion } from "@/shared/ui/accordion"
import Gallery from "@/shared/ui/gallery"

import s from "./tours.module.scss"
import { TourDatesTable } from '@/widgets/tour-dates-table'

const TourDetail: FC = () => {
	const [activeTab, setActiveTab] = useState("tour-program")
	const hotelImages = [
		{
			src: hiltonImage,
			alt: "Hilton Tashkent City main view",
		},
		{
			src: hotelImage,
			alt: "Luxury suite with city view",
		},
		{
			src: spaCenterImage,
			alt: "Executive bedroom",
		},
		{
			src: hotelImage,
			alt: "Hotel lobby",
		},
		{
			src: spaCenterImage,
			alt: "Restaurant area",
		},
		{
			src: hotelImage,
			alt: "Swimming pool",
		},
		{
			src: spaCenterImage,
			alt: "Fitness center",
		},
		{
			src: hotelImage,
			alt: "Spa center",
		},
	]
	const tourData: any[] = [
		{
			id: "1-day",
			title: "1 day",
			description:
				"The Samarkand Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity. This museum is a hidden treasure that provides a unique insight into life and creativity. The Samarkand Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity.",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "registan-square",
			title: "Registan Square",
			description:
				"The Samarkand Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity. This museum is a hidden treasure that provides a unique insight into life and creativity. The Samarkand Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity.",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "ulugbek-observatory",
			title: "Ulugbek Observatory",
			description:
				"The Samarkand Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity. This museum is a hidden treasure that provides a unique insight into life and creativity. The Samarkand Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity.",
			image:
				"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "2-days",
			title: "2 days",
			description:
				"Extended tour program for 2 days exploring more historical sites and cultural experiences.",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
		},
		{
			id: "3-days",
			title: "3 days",
			description:
				"Comprehensive 3-day tour covering all major attractions and local experiences.",
			hasAttentionGrabbing: true,
			hasFavouriteSpots: true,
		},
		{
			id: "4-days",
			title: "4 days",
			description:
				"Complete 4-day journey through historical and cultural landmarks.",
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
	]
	const tourDates: any[] = [
		{
			id: "1",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "sold-out",
			cost: "£350",
		},
		{
			id: "2",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "sold-out",
			cost: "£350",
		},
		{
			id: "3",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "available",
			cost: "£350",
		},
		{
			id: "4",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "available",
			cost: "£350",
		},
		{
			id: "5",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "available",
			cost: "£350",
		},
		{
			id: "6",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "available",
			cost: "£350",
		},
		{
			id: "7",
			from: "4th November",
			to: "12th November",
			deadline: "28 october",
			status: "available",
			cost: "£350",
		},
	]
	const handleTabChange = (value: string | null) => {
		if (value) {
			setActiveTab(value)
		}
	}
	return (
		<Layout>
			<Container size="1440px">
				<Title mt="33px" mb="32px" className={s.tourDetailTitle}>
					Samarqand, Buxoro and Xiva 10-day trip
				</Title>
				<Gallery images={hotelImages as any} title="Hilton Tashkent City" />
				<Group mt="24px" gap={8}>
					<Title className={s.galleryTitle}>
						General Information About the Trip
					</Title>
					<Text className={s.gallerySubtitle}>
						Discover the hidden treasures of the ancient city, located on the
						route of mysterious treasures awaiting discovery. Enjoy the local
						cuisine in a charming and cosy local restaurant. Immerse yourself in
						the rich culture and traditional craftsmanship of the region by
						exploring the fascinating history of the Silk Road. Have fun with
						your amazed friends amidst stunning views, outdoor adventures, and
						sports activities.
					</Text>
				</Group>
				<Box mt="78px">
					<Tabs value={activeTab} className={s.tabs} onChange={handleTabChange}>
						<Tabs.List>
							<Tabs.Tab
								className={s.tab}
								value="tour-program"
								style={{
									backgroundColor:
										activeTab === "tour-program" ? "#044949" : "transparent",
									color: activeTab === "tour-program" ? "white" : "#97A0AD",
								}}
							>
								Tour program
							</Tabs.Tab>

							<Tabs.Tab
								className={s.tab}
								value="date-prices"
								style={{
									backgroundColor:
										activeTab === "date-prices" ? "#044949" : "transparent",
									color: activeTab === "date-prices" ? "white" : "#97A0AD",
								}}
							>
								Date and prices
							</Tabs.Tab>
						</Tabs.List>

						<Tabs.Panel value="tour-program" mt="32px" mb="48px">
							<TourAccordion items={tourData} />
						</Tabs.Panel>

						<Tabs.Panel value="date-prices" mt="32px" mb="48px">
							<TourDatesTable data={tourDates} />
						</Tabs.Panel>
					</Tabs>
				</Box>
			</Container>
		</Layout>
	)
}

export default TourDetail
