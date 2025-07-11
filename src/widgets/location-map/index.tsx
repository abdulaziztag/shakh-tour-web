import L from "leaflet"
import { Card, Group, Text } from "@mantine/core"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import LocationIcon from "@/shared/assets/images/hotel-detail/location_on.svg"

import styles from "./location-map.module.scss"

const customIcon = new L.Icon({
	iconUrl: "/src/shared/assets/images/hotel-detail/location_on.svg",
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
})

interface LocationMapProps {
	title: string;
	address: string
	coordinates: [number, number]
	hotels?: Array<{
		id: string
		name: string
		position: [number, number]
		type: "hotel" | "resort" | "apartment"
	}>
}

const LocationMap: React.FC<LocationMapProps> = ({
	title,
	address,
	coordinates,
	hotels = [],
}) => {
	return (
		<Card className={styles.locationCard} p={0}>
			<Group className={styles.header} justify="space-between" mb="md">
				<div>
					<Text className={styles.title} size="lg" fw={600}>
						{title}
					</Text>
					<Group className={styles.addressGroup} gap="xs">
						<LocationIcon className={styles.pinIcon} />
						<Text className={styles.address} size="sm" c="dimmed">
							{address}
						</Text>
					</Group>
				</div>
			</Group>

			<div className={styles.mapContainer}>
				<MapContainer
					attributionControl={false}
					center={coordinates}
					zoom={13}
					className={styles.map}
					scrollWheelZoom={false}
					zoomControl={false}
					// doubleClickZoom={false}
					// dragging={false}
				>
					<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>

					<Marker position={coordinates} icon={customIcon}>
						<Popup>
							<div className={styles.popup}>
								<Text fw={500}>{address}</Text>
							</div>
						</Popup>
					</Marker>

					{hotels.map((hotel) => (
						<Marker key={hotel.id} position={hotel.position} icon={customIcon}>
							<Popup>
								<div className={styles.popup}>
									<Text fw={500}>{hotel.name}</Text>
									<Text size="xs" c="dimmed">
										{hotel.type}
									</Text>
								</div>
							</Popup>
						</Marker>
					))}
				</MapContainer>
			</div>
		</Card>
	)
}

export default LocationMap
