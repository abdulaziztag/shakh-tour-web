import React, { useState } from "react"

import CalendarIcon from "@/shared/assets/images/hotel-detail/calendar.svg"
import PhoneIcon from "@/shared/assets/images/hotel-detail/phone_in_talk.svg"

import styles from "./dateRange.module.scss"
import { FilledButton } from '../buttons'

interface DateRangePickerProps {
	checkInDate?: string
	checkOutDate?: string
	pricePerDay?: number
	currency?: string
	inquiryPhone?: string
	onDateChange?: (checkIn: string, checkOut: string) => void
	onSendRequest?: () => void
	className?: string
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
	checkInDate = "",
	checkOutDate = "",
	pricePerDay = 650,
	currency = "",
	inquiryPhone = "+998 (99) 123 45 67",
	onDateChange,
	// onSendRequest,
	className = "",
}) => {
	const [checkIn, setCheckIn] = useState<string>(checkInDate)
	const [checkOut, setCheckOut] = useState<string>(checkOutDate)

	const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckIn = e.target.value
		setCheckIn(newCheckIn)
		onDateChange?.(newCheckIn, checkOut)
	}

	const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckOut = e.target.value
		setCheckOut(newCheckOut)
		onDateChange?.(checkIn, newCheckOut)
	}

	// const handleSendRequest = () => {
	// 	onSendRequest?.()
	// }

	const formatDateForInput = (dateString: string): string => {
		if (!dateString) return ""
		const date = new Date(dateString)
		return date.toISOString().split("T")[0]
	}

	const formatDateForDisplay = (dateString: string): string => {
		if (!dateString) return ""
		const date = new Date(dateString)
		const day = date.getDate()
		const month = date.toLocaleString("en", { month: "long" })
		const year = date.getFullYear()

		const suffix =
			day === 1 || day === 21 || day === 31
				? "st"
				: day === 2 || day === 22
					? "nd"
					: day === 3 || day === 23
						? "rd"
						: "th"

		return `${day}${suffix} ${month} ${year}`
	}

	return (
		<div className={`${styles.dateRangePicker} ${className}`}>
			<div className={styles.priceSection}>
				<span className={styles.price}>
					{currency}
					{pricePerDay} per day
				</span>
			</div>

			<div className={styles.dateInputs}>
				<div className={styles.inputGroup}>
					<label className={styles.label}>Check-in Time</label>
					<div className={styles.inputWrapper}>
						<input
							type="date"
							value={formatDateForInput(checkIn)}
							onChange={handleCheckInChange}
							className={styles.dateInput}
						/>
						<div className={styles.displayDate}>
							{checkIn ? formatDateForDisplay(checkIn) : "Select date"}
						</div>
						<div className={styles.calendarIcon}>
							<CalendarIcon />
						</div>
					</div>
				</div>

				<div className={styles.inputGroup}>
					<label className={styles.label}>Check-out Time</label>
					<div className={styles.inputWrapper}>
						<input
							type="date"
							value={formatDateForInput(checkOut)}
							onChange={handleCheckOutChange}
							className={styles.dateInput}
						/>
						<div className={styles.displayDate}>
							{checkOut ? formatDateForDisplay(checkOut) : "Select date"}
						</div>
						<div className={styles.calendarIcon}>
							<CalendarIcon />
						</div>
					</div>
				</div>
			</div>

			<div className={styles.inquirySection}>
				<div className={styles.inquiryInfo}>
					<span className={styles.inquiryLabel}>For Inquiries:</span>
					<div className={styles.phoneNumber}>
						<PhoneIcon />
						<span>{inquiryPhone}</span>
					</div>
				</div>
			</div>
			<FilledButton fullWidth className={styles.sendButton}>
				Send request
			</FilledButton>
		</div>
	)
}

export default DateRangePicker
