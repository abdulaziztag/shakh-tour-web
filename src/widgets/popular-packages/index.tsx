import Image1 from "@//shared/assets/images/popular-packages/1.jpeg"
import { Box, Text } from "@mantine/core"
import cx from "clsx"
import Image from "next/image"
import React from "react"

import s from "./popular-packages.module.scss"

export const PopularPackages = () => {
	return (
		<Box className={s.popularPackages}>
			<Text component={"h2"} className={cx(s.popularPackagesTitle, "title")}>
				Popular tour packages
			</Text>
			<Box className={s.popularPackagesGrid}>
				<Box className={cx(s.popularPackagesBox1, s.popularPackagesBox)}>
					<Image src={Image1} alt={""} width={624} height={608} />
					<Box className={s.popularPackagesBoxInfo}>
						<Box className={s.popularPackagesBoxPrice}>
							<Text component={"p"} className={s.popularPackagesBoxPriceTitle}>
								From $3,999 USD
							</Text>
						</Box>
						<Box className={s.popularPackagesBoxBottom}>
							<Text
								component={"h2"}
								className={s.popularPackagesBoxBottomTitle}
							>
								Travel to Samarkand
							</Text>
							<Text
								component={"p"}
								className={s.popularPackagesBoxBottomDescription}
							>
								Welcome to Uzbekistan, where you will have an exciting tour to
								the world of oriental fairy tale
							</Text>
						</Box>
					</Box>
				</Box>
				<Box className={cx(s.popularPackagesBox2, s.popularPackagesBox)}>
					<Image src={Image1} alt={""} width={320} height={292} />
					<Box className={s.popularPackagesBoxInfo}>
						<Box className={s.popularPackagesBoxPrice}>
							<Text component={"p"} className={s.popularPackagesBoxPriceTitle}>
								From $3,999 USD
							</Text>
						</Box>
						<Box className={s.popularPackagesBoxBottom}>
							<Text
								component={"h2"}
								className={s.popularPackagesBoxBottomTitle}
							>
								Khiva
							</Text>
						</Box>
					</Box>
				</Box>
				<Box className={cx(s.popularPackagesBox3, s.popularPackagesBox)}>
					<Image src={Image1} alt={""} width={320} height={292} />
					<Box className={s.popularPackagesBoxInfo}>
						<Box className={s.popularPackagesBoxPrice}>
							<Text component={"p"} className={s.popularPackagesBoxPriceTitle}>
								From $3,999 USD
							</Text>
						</Box>
						<Box className={s.popularPackagesBoxBottom}>
							<Text
								component={"h2"}
								className={s.popularPackagesBoxBottomTitle}
							>
								Bukhara
							</Text>
						</Box>
					</Box>
				</Box>
				<Box className={cx(s.popularPackagesBox4, s.popularPackagesBox)}>
					<Image src={Image1} alt={""} width={320} height={292} />
					<Box className={s.popularPackagesBoxInfo}>
						<Box className={s.popularPackagesBoxPrice}>
							<Text component={"p"} className={s.popularPackagesBoxPriceTitle}>
								From $3,999 USD
							</Text>
						</Box>
						<Box className={s.popularPackagesBoxBottom}>
							<Text
								component={"h2"}
								className={s.popularPackagesBoxBottomTitle}
							>
								Khiva
							</Text>
						</Box>
					</Box>
				</Box>
				<Box className={cx(s.popularPackagesBox5, s.popularPackagesBox)}>
					<Image src={Image1} alt={""} width={320} height={292} />
					<Box className={s.popularPackagesBoxInfo}>
						<Box className={s.popularPackagesBoxPrice}>
							<Text component={"p"} className={s.popularPackagesBoxPriceTitle}>
								From $3,999 USD
							</Text>
						</Box>
						<Box className={s.popularPackagesBoxBottom}>
							<Text
								component={"h2"}
								className={s.popularPackagesBoxBottomTitle}
							>
								Bukhara
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	)
}
