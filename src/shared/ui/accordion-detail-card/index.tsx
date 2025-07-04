import { Box, Group, Stack, Text, Title } from "@mantine/core"
import Image from "next/image"
// import { IconBuilding, IconEye, IconHeart } from "@tabler/icons-react"
import { FC } from "react"

import Icon1 from "@/shared/assets/images/recommended-hotels/1.svg"
import Icon2 from "@/shared/assets/images/recommended-hotels/2.svg"
import Icon3 from "@/shared/assets/images/recommended-hotels/3.svg"

import styles from "./accordion-card.module.scss"

interface TourItem {
	id: string
	title: string
	subtitle?: string
	description: string
	image?: string
	hasAttentionGrabbing?: boolean
	hasAncientMonuments?: boolean
	hasFavouriteSpots?: boolean
}

interface AccordionDetailCardProps {
	item: TourItem
}

const AccordionDetailCard: FC<AccordionDetailCardProps> = ({ item }) => {
	const generateTags = () => {
		const tags = []

		if (item.hasAttentionGrabbing) {
			tags.push({
				id: "attention",
				label: "Attention-grabbing sights",
				icon: <Icon1 />,
				color: "blue",
			})
		}

		if (item.hasAncientMonuments) {
			tags.push({
				id: "ancient",
				label: "Ancient monuments",
				icon: <Icon2 />,
				color: "teal",
			})
		}

		if (item.hasFavouriteSpots) {
			tags.push({
				id: "favourite",
				label: "Favourite souvenirs",
				icon: <Icon3 />,
				color: "pink",
			})
		}

		return tags
	}

	const tags = generateTags()

	return (
		<Box className={styles.accordionCard}>
			<Group gap="24px" align="flex-start" className={styles.cardContent}>
				<Box className={styles.imageContainer}>
					<Image
						src={item.image ?? ""}
						alt={item.title}
						className={styles.cardImage}
					/>
				</Box>

				<Stack className={styles.contentSection}>
					<Title className={styles.title}>{item?.subtitle}</Title>
					<Group className={styles.tagsContainer}>
						{tags.map((tag) => (
							<Box key={tag.id} className={styles.tag}>
								<Group gap={6} align="center">
									{tag.icon}
									<Text>{tag.label}</Text>
								</Group>
							</Box>
						))}
					</Group>

					<Text className={styles.description}>{item.description}</Text>
				</Stack>
			</Group>
		</Box>
	)
}

export default AccordionDetailCard
