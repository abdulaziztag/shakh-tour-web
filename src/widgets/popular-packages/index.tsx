import { Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import s from "./popular-packages.module.scss"

export const PopularPackages = () => {
	return (
		<>
			<Text component={"h2"} className={cx(s.popularPackagesTitle, "title")}>
				Popular tour packages
			</Text>
		</>
	)
}
