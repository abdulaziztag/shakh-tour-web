import React from "react"

import LocationIcon from "@/shared/assets/images/hotel-detail/location_on.svg";
import PhoneIcon from "@/shared/assets/images/hotel-detail/phone_in_talk.svg"
import styles from "./hotel-info.module.scss"

type HotelInfoProps = {
	title: string
	address: string
	phone: string
	phoneHref: string
}

const HotelInfo: React.FC<HotelInfoProps> = ({
	title,
	address,
	phone,
	phoneHref,
}) => {
	return (
		<div className={styles.titleCard}>
			<h2 className={styles.pageTitle}>{title}</h2>

			<div className={styles.infoStack}>
				<div className={styles.group}>
					<LocationIcon />
					<span className={styles.text}>{address}</span>
				</div>

				<div className={styles.group}>
					<PhoneIcon />
					<a href={phoneHref} className={styles.phoneLink}>
						{phone}
					</a>
				</div>
			</div>
		</div>
	)
}

export default HotelInfo
