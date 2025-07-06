import { Box, Container, Group, Stack, Tabs, Text, Title } from "@mantine/core"
import { FC, useState } from "react"

import { Layout } from "@/widgets"
import { TourAccordionAcc } from "@/widgets/accommodation-accordion"
import { TourAccordion } from "@/widgets/accordion"
import { TourDatesTable } from "@/widgets/tour-dates-table"

import IconChevron from "@/shared/assets/images/Check icon.svg"
import AccordionDetailImage from "@/shared/assets/images/Frame 2087330294.jpg"
import hiltonImage from "@/shared/assets/images/all-tours/image (6).png"
import spaCenterImage from "@/shared/assets/images/all-tours/image (7).png"
import hotelImage from "@/shared/assets/images/all-tours/Frame 1948757896 (1).jpg"
import RedCancel from "@/shared/assets/images/red-cancel.svg"
import { FilledButton } from "@/shared/ui/buttons"
import Gallery from "@/shared/ui/gallery"
import { ReviewCard } from "@/shared/ui/review-card"

import s from "./tours.module.scss"
import TourRequestForm from '@/widgets/tour-request-form'
import SimilerTourGroup from '@/widgets/similer-tour-group'

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
	const tourItems: any[] = [
		{
			id: "1",
			title: "1 days",
			subtitle: "Ulugbek Observatory",
			description:
				"The Sadriddin Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity. This museum is a hidden treasure that provides a unique insight into life and creativity. The Sadriddin Ayni House Museum in Samarkand is a hidden gem that perfectly combines historical, cultural, and Silk Road interests to pique your curiosity.",
			image: AccordionDetailImage,
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "2",
			title: "2 days",
			subtitle: "Ulugbek Observatory",
			description:
				"Explore the magnificent architectural wonders of Samarkand in a comprehensive 2-day tour. Visit the iconic Registan Square, the breathtaking Bibi-Khanym Mosque, and the mystical Shah-i-Zinda necropolis. Experience the rich history and cultural heritage of this ancient Silk Road city.",
			image: AccordionDetailImage,
			hasAttentionGrabbing: false,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "3",
			title: "3 days",
			subtitle: "Ulugbek Observatory",
			description:
				"Immerse yourself in the complete Samarkand experience with our 3-day comprehensive tour. Beyond the classic sites, discover hidden gems, local bazaars, traditional crafts workshops, and enjoy authentic Uzbek cuisine. Perfect for those who want to truly understand the soul of this historic city.",
			image: AccordionDetailImage,
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: false,
		},
		{
			id: "4",
			title: "4 days",
			subtitle: "Ulugbek Observatory",
			description:
				"The ultimate Samarkand adventure awaits with our 4-day extended tour. Experience everything the city has to offer, including day trips to nearby historical sites, in-depth cultural experiences, traditional music and dance performances, and exclusive access to private collections and museums.",
			image: AccordionDetailImage,
			hasAttentionGrabbing: true,
			hasAncientMonuments: false,
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
	const includes = [
		"All transfers: 1-2 pax by Sedan type car, 8-16 pax by 20 seat bus",
		"Accommodation based on double/twin room sharing, breakfasts included",
		"English-speaking local guides in each country",
		"Entrance fees to sights as per itinerary",
		"Economy class tickets for flights: Bishkek-Tashkent, Mary-Ashgabat, Urgench-Tashkent",
	]

	const notIncludes = [
		"Surcharge for staying in a single room",
		"Full board (lunches and dinners)",
		"Hotel charges for additional services",
		"Personal travel insurance",
		"Tips to local guides and drivers",
	]

	const mockReviews = [
		{
			name: "Olivia Rhye",
			title: "The highest dam in the hotel",
			content:
				"I express my gratitude to Shakh Tours for assisting me during my trip to Samarqand for a week. Through this tour company, I visited the most beautiful and unique places in Uzbekistan and gained a memorable and enjoyable experience for myself. I recommend it to everyone.",
			shares: 2,
			rating: 4,
			avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
		},
		{
			name: "John Doe",
			title: "The best tour ever",
			content:
				"I express my gratitude to Shakh Tours for assisting me during my trip to Samarqand for a week. Through this tour company, I visited the most beautiful and unique places in Uzbekistan and gained a memorable and enjoyable experience for myself. I recommend it to everyone.",
			shares: 3,
			rating: 5,
			avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
		},
		{
			name: "Aliya Khan",
			title: "The highest dam in the hotel",
			content:
				"I express my gratitude to Shakh Tours for assisting me during my trip to Samarqand for a week. Through this tour company, I visited the most beautiful and unique places in Uzbekistan and gained a memorable and enjoyable experience for myself. I recommend it to everyone.",
			shares: 1,
			rating: 4.5,
			avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg",
		},
		{
			name: "Michael Smith",
			title: "Amazing service",
			content:
				"I express my gratitude to Shakh Tours for assisting me during my trip to Samarqand for a week. Through this tour company, I visited the most beautiful and unique places in Uzbekistan and gained a memorable and enjoyable experience for myself. I recommend it to everyone.",
			shares: 3,
			rating: 4.8,
			avatarUrl: "https://randomuser.me/api/portraits/men/55.jpg",
		},
		{
			name: "Sofia Loren",
			title: "Memorable journey",
			content:
				"I express my gratitude to Shakh Tours for assisting me during my trip to Samarqand for a week. Through this tour company, I visited the most beautiful and unique places in Uzbekistan and gained a memorable and enjoyable experience for myself. I recommend it to everyone.",
			shares: 4,
			rating: 5,
			avatarUrl: "https://randomuser.me/api/portraits/women/88.jpg",
		},
	]

	const tourAccItems = [
		{
			id: "tashkent-2-days",
			title: "Tashkent 2 days",
			subtitle: "Explore the capital city",
			description: "Experience the best of Tashkent with guided tours",
			image: "/images/tashkent.jpg",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "samarkand-3-days",
			title: "Samarkand 3 days",
			subtitle: "Historical city tour",
			description: "Discover the ancient Silk Road city",
			image: "/images/samarkand.jpg",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "bukhara-2-days",
			title: "Bukhara 2 days",
			subtitle: "Medieval city exploration",
			description: "Walk through centuries of history",
			image: "/images/bukhara.jpg",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
		},
		{
			id: "khorezm-1-day",
			title: "Khorezm 1 day",
			subtitle: "Ancient oasis civilization",
			description: "Explore the historical region",
			image: "/images/khorezm.jpg",
			hasAttentionGrabbing: true,
			hasAncientMonuments: true,
			hasFavouriteSpots: true,
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
				<Box mt="78px" mb="48px">
					<Tabs
						variant="unstyled"
						value={activeTab}
						className={s.tabs}
						onChange={handleTabChange}
					>
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
							<TourAccordion items={tourItems} />
						</Tabs.Panel>

						<Tabs.Panel value="date-prices" mt="32px" mb="48px">
							<TourDatesTable data={tourDates} />
						</Tabs.Panel>
					</Tabs>
				</Box>
				<Box mt="24px">
					<Title className={s.heading}>
						Our tour package includes things that can be of interest
					</Title>

					<Group align="flex-start" grow mt="24px" mb="48px">
						<Box className={s.includingCard}>
							<Text className={s.priceTitle} pl={12}>
								Price includes
							</Text>
							<Stack gap={16}>
								{includes.map((item) => (
									<Group
										key={item}
										gap={12}
										className={s.cardWrapper}
										align="center"
										wrap="nowrap"
									>
										<IconChevron />
										<Text className={s.priceCardDescription}>{item}</Text>
									</Group>
								))}
							</Stack>
						</Box>

						<Box className={s.includingCard}>
							<Text className={s.priceTitle} pl={12}>
								Price doesn’t include:
							</Text>
							<Stack gap={16}>
								{notIncludes.map((item) => (
									<Group
										key={item}
										gap={12}
										className={s.cardWrapper}
										align="center"
										wrap="nowrap"
									>
										<RedCancel />
										<Text className={s.priceCardDescription}>{item}</Text>
									</Group>
								))}
							</Stack>
						</Box>
					</Group>
				</Box>
				<Box mb="48px">
					<div className={s.reviewWrap}>
						<Title className={s.reviewSubtitle}>Tour Reviews</Title>
						<FilledButton fullWidth className={s.addReview}>
							Add review
						</FilledButton>
					</div>
					<div className={s.cardContainer}>
						{mockReviews.map((review, index) => (
							<div key={index} className={s.reviewCard}>
								<ReviewCard
									name={review.name}
									title={review.title}
									content={review.content}
									shares={review.shares}
									rating={review.rating}
								/>
							</div>
						))}
					</div>
				</Box>
				<Box mb="48px">
					<Title mb="32px" className={s.reviewSubtitle}>
						Accommodation
					</Title>
					<TourAccordionAcc items={tourAccItems as any} />
				</Box>
				<Box mt={96} >
					<TourRequestForm />
				</Box>
				<Box mt={72} mb={48}>
					<Title>More similar tours</Title>
					<SimilerTourGroup />
				</Box>
			</Container>
		</Layout>
	)
}

export default TourDetail
