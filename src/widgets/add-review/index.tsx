import { Group, Modal, Rating, Text } from "@mantine/core"
import { FC, useState } from "react"

import IconX from "@/shared/assets/images/close.svg"
import { Input, Textarea } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./add-review.module.scss"

interface AddReviewProps {
	opened: boolean
	onClose: () => void
}

const AddReview: FC<AddReviewProps> = ({ opened, onClose }) => {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [rating, setRating] = useState(0)
	const [comment, setComment] = useState("")

	const handleSubmit = () => {
		console.log({
			name,
			email,
			rating,
			comment,
		})

		setName("")
		setEmail("")
		setRating(0)
		setComment("")

		onClose()
	}

	return (
		<Modal
			opened={opened}
			onClose={onClose}
			withCloseButton={false}
			centered
			size={492}
			classNames={{
				body: s.modalBody,
			}}
			radius={24}
		>
			<div className={s.formContainer}>
				<Group className={s.header} mt={32}>
					<Text className={s.title}>Add review</Text>
					<button onClick={onClose} className={s.closeButton}>
						<IconX />
					</button>
				</Group>
				<div className={s.inputGroup}>
					<Input
						label="Name"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className={s.inputGroup}>
					<Input
						label="Email"
						placeholder="Enter your email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div className={s.inputGroup}>
					<label className={s.ratingLabel}>Rating</label>
					<Rating
						value={rating}
						onChange={setRating}
						size={32}
						className={s.rating}
					/>
				</div>

				<div className={s.inputGroup}>
					<Textarea
						label="Comment"
						placeholder="Leave a comment"
						minRows={4}
						maxRows={6}
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</div>

				<FilledButton
					onClick={handleSubmit}
					className={s.submitButton}
					fullWidth
					size="md"
					mt={24}
				>
					Send your inquiry
				</FilledButton>
			</div>
		</Modal>
	)
}

export default AddReview
