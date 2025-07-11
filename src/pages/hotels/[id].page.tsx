import { Container, Grid, Text, Title } from "@mantine/core"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import React, { FC, useState } from "react"

import { Layout } from "@/widgets"
import AddReview from "@/widgets/add-review"

import IconLeft from "@/shared/assets/images/chevron-left.svg"
import RoomServiceIcon from "@/shared/assets/images/hotel-detail/concierge.svg"
import FamilyIcon from "@/shared/assets/images/hotel-detail/family_restroom.svg"
import hiltonImage from "@/shared/assets/images/hotel-detail/image (3).png"
import spaCenterImage from "@/shared/assets/images/hotel-detail/image (4).png"
import hotelImage from "@/shared/assets/images/hotel-detail/image (5).png"
import KingBadIcon from "@/shared/assets/images/hotel-detail/king_bed.svg"
import BellIcon from "@/shared/assets/images/hotel-detail/personal_injury.svg"
import BathroomIcon from "@/shared/assets/images/hotel-detail/shower.svg"
import AirConditionIcon from "@/shared/assets/images/recommended-hotels/1.svg"
import WifiIcon from "@/shared/assets/images/recommended-hotels/2.svg"
import ParkingIcon from "@/shared/assets/images/recommended-hotels/3.svg"
import { RecommendedHotels } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"
import DateRangePicker from "@/shared/ui/date-range-picker"
import FacilityItem from "@/shared/ui/facilities"
import Gallery from "@/shared/ui/gallery/index"
import HotelInfo from "@/shared/ui/hotel-info"
import { ReviewCard } from "@/shared/ui/review-card"
import { RoomCard } from "@/shared/ui/room-card"

import styles from "./hotels.module.scss"

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

const roomsData = [
	{
		id: "room-1",
		images: [
			"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
		],
		title: "Standard double room",
		subtitle: "(2 single beds)",
		price: 500724,
		currency: "UZS",
		priceLabel: "per night",
		features: [
			{ label: "Meals not included", available: false },
			{ label: "Free cancellation until 18.03.23", available: true },
			{ label: "Pay now", available: true },
		],
		buttonText: "Book now",
	},
	{
		id: "room-2",
		images: [
			"https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
		],
		title: "Standard double room",
		subtitle: "(2 single beds)",
		price: 500724,
		currency: "UZS",
		priceLabel: "per night",
		features: [
			{ label: "Meals not included", available: false },
			{ label: "Free cancellation until 18.03.23", available: true },
			{ label: "Pay now", available: true },
		],
		buttonText: "Book now",
	},
	{
		id: "room-3",
		images: [
			"https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1586611292717-f828b167408c?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
		],
		title: "Standard double room",
		subtitle: "(2 single beds)",
		price: 500724,
		currency: "UZS",
		priceLabel: "per night",
		features: [
			{ label: "Meals not included", available: false },
			{ label: "Free cancellation until 18.03.23", available: true },
			{ label: "Pay now", available: true },
		],
		buttonText: "Book now",
	},
	{
		id: "room-4",
		images: [
			"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
			"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
		],
		title: "Standard double room",
		subtitle: "(2 single beds)",
		price: 500724,
		currency: "UZS",
		priceLabel: "per night",
		features: [
			{ label: "Meals not included", available: false },
			{ label: "Free cancellation until 18.03.23", available: true },
			{ label: "Pay now", available: true },
		],
		buttonText: "Book now",
	},
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

const facilities = [
	{ icon: <RoomServiceIcon />, title: "Room Service" },
	{ icon: <AirConditionIcon />, title: "Air Conditioning" },
	{ icon: <WifiIcon />, title: "Free Wi-Fi" },
	{ icon: <BathroomIcon />, title: "Private Bathroom" },
	{ icon: <ParkingIcon />, title: "Private Parking Area" },
	{ icon: <FamilyIcon />, title: "Family Rooms" },
	{ icon: <BellIcon />, title: "Room Attendant" },
	{ icon: <KingBadIcon />, title: "Spacious Bedroom" },
]

const sampleHotels = [
	{
		id: "1",
		name: "Kerem Apart Hotel",
		position: [41.0082, 28.9784] as [number, number],
		type: "hotel" as const,
	},
	{
		id: "2",
		name: "Göcek Arion Hotel",
		position: [41.0072, 28.9794] as [number, number],
		type: "hotel" as const,
	},
	{
		id: "3",
		name: "Göcek Lykia Resort Hotel",
		position: [41.0092, 28.9774] as [number, number],
		type: "resort" as const,
	},
	{
		id: "4",
		name: "Vira Apart Hotel",
		position: [41.0062, 28.9804] as [number, number],
		type: "apartment" as const,
	},
]

const LocationMap = dynamic(() => import("@/widgets/location-map"), {
	ssr: false,
})

const HotelDetail: FC = () => {
	const [modalOpened, setModalOpened] = useState(false)

	const [selectedDates, setSelectedDates] = useState({
		checkIn: "2024-04-14",
		checkOut: "2024-04-17",
	})
	const router = useRouter()

	const handleDateChange = (checkIn: string, checkOut: string) => {
		setSelectedDates({ checkIn, checkOut })
		console.log("Dates changed:", { checkIn, checkOut })
	}

	const handleSendRequest = () => {
		console.log("Send request clicked with dates:", selectedDates)
		alert(
			`Request sent for ${selectedDates.checkIn} to ${selectedDates.checkOut}`,
		)
	}

	const handleRoomBooking = (roomId: string) => {
		console.log(`Booking room: ${roomId}`)
	}

	const handleFavoriteToggle = (roomId: string, isFavorited: boolean) => {
		console.log(`Room ${roomId} favorited: ${isFavorited}`)
	}

	// const handleViewDetail = (hotelId: number) => {
	// 	router.push(`/hotels/${hotelId}`)
	// }

	return (
		<Layout>
			<div className={styles.hotelPage}>
				<Container size={"1440px"}>
					<Text
						component={"p"}
						className={styles.pageHeaderBack}
						onClick={() => router.push("/hotels")}
					>
						<IconLeft />
						Back
					</Text>
					<HotelInfo
						title="Hilton Tashkent Hotel"
						address="1 Ukchi Street, 100027 Tashkent, Uzbekistan"
						phone="+998 (71) 207 00 00"
						phoneHref="tel:+998712070000"
					/>
					<Gallery images={hotelImages as any} title="Hilton Tashkent City" />

					<div className={styles.aboutHotel}>
						<p>
							The first hostel in Tashkent. Located in a quiet corner of the
							city centre, the very convenient and affordable Art Hostel offers
							travellers one of the most attractive places to stay. A wonderful
							place to meet other travellers, relax and unwind. We have a pool,
							table tennis, many games and interesting company for you.
						</p>
						<p>
							The first hostel in Tashkent. Located in a quiet corner of the
							city centre, the very convenient and affordable Art Hostel offers
							travellers one of the most attractive places to stay. A wonderful
							place to meet other travellers, relax and unwind. We have a pool,
							table tennis, many games and interesting company for you.
						</p>
						<p>
							The first hostel in Tashkent. Located in a quiet corner of the
							city centre, the very convenient and affordable Art Hostel offers
							travellers one of the most attractive places to stay. A wonderful
							place to meet other travellers, relax and unwind. We have a pool,
							table tennis, many games and interesting company for you.
						</p>
					</div>
					<div className={styles.booking}>
						<div className={styles.container}>
							<h3 className={styles.heading}>Facilities</h3>
							<div className={styles.grid}>
								{facilities.map((facility, index) => (
									<FacilityItem
										key={index}
										icon={facility.icon}
										title={facility.title}
									/>
								))}
							</div>
						</div>
						<div className={styles.dateCard}>
							<DateRangePicker
								checkInDate={selectedDates.checkIn}
								checkOutDate={selectedDates.checkOut}
								pricePerDay={650}
								currency="$"
								inquiryPhone="+998 (99) 123 45 67"
								onDateChange={handleDateChange}
								onSendRequest={handleSendRequest}
							/>
						</div>
					</div>
					<div className={styles.reviewWrap}>
						<Title className={styles.reviewSubtitle}>
							Pricing Public opinion about the hotel
						</Title>
						<FilledButton
							fullWidth
							className={styles.addReview}
							onClick={() => setModalOpened(true)}
						>
							Add review
						</FilledButton>
						<AddReview
							opened={modalOpened}
							onClose={() => setModalOpened(false)}
						/>
					</div>
					<div className={styles.cardContainer}>
						{mockReviews.map((review, index) => (
							<div key={index} className={styles.reviewCard}>
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
					<div className={styles.roomWrap}>
						<Title order={2} mb="xl" className={styles.roomTitle}>
							Rooms
						</Title>

						<Grid>
							{roomsData.map((room) => (
								<Grid.Col
									key={room.id}
									span={{ base: 12, sm: 6, md: 4, lg: 3 }}
								>
									<RoomCard
										id={room.id}
										images={room.images}
										title={room.title}
										subtitle={room.subtitle}
										price={room.price}
										currency={room.currency}
										priceLabel={room.priceLabel}
										features={room.features}
										buttonText={room.buttonText}
										onButtonClick={handleRoomBooking}
										onFavoriteToggle={handleFavoriteToggle}
										initialFavorited={false}
									/>
								</Grid.Col>
							))}
						</Grid>
					</div>
					<LocationMap
						title="Location on map"
						address="1 Ulčni Street, 100027 Tashkent, Uzbekistan"
						coordinates={[41.2995, 69.2401]}
						hotels={sampleHotels}
					/>
					<div className={styles.recommenedHotel}>
						<h5 className={styles.recomendedHotelTitle}>Other hotels also</h5>
						<RecommendedHotels
							// onViewDetail={handleViewDetail}
							titleButton={"See details"}
							viewButton
							m={"0"}
							p={"0"}
						/>
					</div>
				</Container>
			</div>
		</Layout>
	)
}

export default HotelDetail
