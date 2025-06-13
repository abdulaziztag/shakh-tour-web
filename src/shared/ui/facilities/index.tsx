import React from "react"

import styles from "./facilities.module.scss"

interface Props {
	icon: React.ReactNode
	title: string
}

const FacilityItem: React.FC<Props> = ({ icon, title }) => {
	return (
		<div className={styles.item}>
			<span className={styles.icon}>{icon}</span>
			<span className={styles.title}>{title}</span>
		</div>
	)
}

export default FacilityItem
