import { Text } from "@mantine/core"
import { useRouter } from "next/router"
import React from "react"

import IconLeft from "@/shared/assets/images/chevron-left.svg"

import styles from "./back-btn.module.scss"

export const BackBtn = ({ fallbackUrl = "/" }: { fallbackUrl?: string }) => {
	const router = useRouter()

	const handleBack = () => {
		if (window.history?.length && window.history.length > 1) {
			router.back()
		} else {
			void router.push(fallbackUrl)
		}
	}

	return (
		<Text component={"p"} className={styles.backBtn} onClick={handleBack}>
			<IconLeft />
			Back
		</Text>
	)
}
