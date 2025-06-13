import Image from "next/image"
import { useState } from "react"

import IconSee from "@/shared/assets/images/hotel-detail/expand 1.svg"

import styles from "./gallery.module.scss"

interface ImageType {
	src: string
	alt?: string
}

interface Props {
	images: ImageType[]
	title?: string
}

const Gallery = ({ images, title }: Props) => {
	const [selectedImage, setSelectedImage] = useState<any>(null)
	const [currentIndex, setCurrentIndex] = useState(0)

	const openModal = (index: number) => {
		setCurrentIndex(index)
		setSelectedImage(images[index])
	}

	const closeModal = () => {
		setSelectedImage(null)
	}

	const nextImage = () => {
		const nextIndex = (currentIndex + 1) % images.length
		setCurrentIndex(nextIndex)
		setSelectedImage(images[nextIndex])
	}

	const prevImage = () => {
		const prevIndex = (currentIndex - 1 + images.length) % images.length
		setCurrentIndex(prevIndex)
		setSelectedImage(images[prevIndex])
	}

	const goToImage = (index: number) => {
		setCurrentIndex(index)
		setSelectedImage(images[index])
	}

	return (
		<>
			<div className={styles.gallery}>
				<div className={styles.mainImage}>
					<Image
						src={images[0]?.src}
						alt={images[0]?.alt || "hotel main image"}
						fill
						className={styles.image}
						onClick={() => openModal(0)}
					/>
					<div className={styles.seeAllBtn} onClick={() => openModal(0)}>
						<IconSee />
						<p>See all ({images.length})</p>
					</div>
				</div>
				<div className={styles.thumbnails}>
					{images.slice(1, 5).map((image, index) => (
						<div
							key={index + 1}
							className={styles.thumbnail}
							onClick={() => openModal(index + 1)}
						>
							<Image
								src={image.src}
								alt={image.alt || `${title} image ${index + 2}`}
								fill
								className={styles.image}
							/>
						</div>
					))}
				</div>
			</div>
			{selectedImage && (
				<div className={styles.modal} onClick={closeModal}>
					<div
						className={styles.modalContent}
						onClick={(e) => e.stopPropagation()}
					>
						<button className={styles.closeBtn} onClick={closeModal}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M18 6L6 18M6 6l12 12"
									stroke="currentColor"
									strokeWidth="2"
								/>
							</svg>
						</button>

						<button className={styles.prevBtn} onClick={prevImage}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path
									d="M15 18l-6-6 6-6"
									stroke="currentColor"
									strokeWidth="2"
								/>
							</svg>
						</button>

						<button className={styles.nextBtn} onClick={nextImage}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" />
							</svg>
						</button>

						<div className={styles.imageContainer}>
							<Image
								src={selectedImage.src}
								alt={selectedImage.alt || title}
								fill
								className={styles.modalImage}
							/>
						</div>

						<div className={styles.thumbnailStrip}>
							{images.map((image, index) => (
								<div
									key={index}
									className={`${styles.modalThumbnail} ${
										index === currentIndex ? styles.active : ""
									}`}
									onClick={() => goToImage(index)}
								>
									<Image
										src={image.src}
										alt={image.alt || `${title} thumbnail ${index + 1}`}
										fill
										className={styles.image}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Gallery
