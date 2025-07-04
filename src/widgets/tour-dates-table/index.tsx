import { Badge, Box, Button, Table, Text } from "@mantine/core"
import React from "react"

import styles from "./tour-dates-table.module.scss"

interface TourDate {
	id: string
	from: string
	to: string
	deadline: string
	status: "available" | "sold-out"
	cost: string
}

interface TourDatesTableProps {
	data: TourDate[]
	loading?: boolean
}

export const TourDatesTable: React.FC<TourDatesTableProps> = ({
	data,
}) => {
	const getStatusBadge = (status: "available" | "sold-out") => {
		if (status === "sold-out") {
			return (
				<Badge
					variant="outline"
					className={styles.soldOutBadge}
				>
					Sold out
				</Badge>
			)
		}

		return (
			<Badge
				variant="light"
				color="green"
				size="sm"
				className={styles.availableBadge}
			>
				Available
			</Badge>
		)
	}

	const getActionButton = (status: "available" | "sold-out") => {
		if (status === "sold-out") {
			return null
		}

		return (
			<Button size="sm" variant="filled" className={styles.enquiryButton}>
				Enquiry
			</Button>
		)
	}

	const rows = data.map((item) => (
		<Table.Tr key={item.id} className={styles.tableRow}>
			<Table.Td className={styles.tableCell}>
				<Text size="sm" fw={500} className={styles.dateText}>
					{item.from}
				</Text>
			</Table.Td>
			<Table.Td className={styles.tableCell}>
				<Text size="sm" fw={500} className={styles.dateText}>
					{item.to}
				</Text>
			</Table.Td>
			<Table.Td className={styles.tableCell}>
				<Text size="sm" c="red" className={styles.deadlineText}>
					{item.deadline}
				</Text>
			</Table.Td>
			<Table.Td className={styles.tableCell}>
				{getStatusBadge(item.status)}
			</Table.Td>
			<Table.Td className={styles.tableCell}>
				<Text size="sm" fw={600} className={styles.costText}>
					{item.cost}
				</Text>
			</Table.Td>
			<Table.Td className={styles.tableCell}>
				{getActionButton(item.status)}
			</Table.Td>
		</Table.Tr>
	))

	return (
		<Box className={styles.tableContainer}>
			<Table
				striped={false}
				highlightOnHover
				withTableBorder={false}
				withColumnBorders={false}
				className={styles.mantineTable}
			>
				<Table.Thead className={styles.tableHead}>
					<Table.Tr>
						<Table.Th className={styles.headerCell} w={309}>From</Table.Th>
						<Table.Th className={styles.headerCell} w={309}>To</Table.Th>
						<Table.Th className={styles.headerCell} w={309}>Deadline</Table.Th>
						<Table.Th className={styles.headerCell} w={140}>Status</Table.Th>
						<Table.Th className={styles.headerCell} w={105}>Cost</Table.Th>
						<Table.Th className={styles.headerCell} w={140}></Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody className={styles.tableBody}>{rows}</Table.Tbody>
			</Table>
		</Box>
	)
}
