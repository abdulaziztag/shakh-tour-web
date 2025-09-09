import React from "react"

type Props = {
	title?: string
	carLabel?: string
	people?: number
	luggage?: number
	waitingText?: string
	meetText?: string
	refundableText?: string
	price: number | string
	oldPrice?: number | string
	onChoose?: () => void
}

export const TransferClassCard: React.FC<Props> = ({
	title = "Comfort",
	carLabel = "Mercedes Vito or a similar one",
	people = 4,
	luggage = 4,
	waitingText = "15 min. waiting time included",
	meetText = "Meeting with a plate",
	refundableText = "Non-refundable rate",
	price,
	oldPrice,
	onChoose,
}) => {
	const card: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 16,
		padding: 16,
		borderRadius: 12,
		background: "#fff",
		boxShadow: "0 1px 0 rgba(16,24,40,0.04), 0 1px 2px rgba(16,24,40,0.06)",
		border: "1px solid #ECECEC",
	}

	const left: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		gap: 16,
		flex: 1,
		minWidth: 0,
	}

	const carBox: React.CSSProperties = {
		width: 120,
		height: 70,
		borderRadius: 10,
		background: "#F5F6F7",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		overflow: "hidden",
	}

	const infoCol: React.CSSProperties = {
		display: "flex",
		flexDirection: "column",
		gap: 6,
		minWidth: 0,
	}

	const titleSt: React.CSSProperties = {
		fontSize: 18,
		fontWeight: 700,
		color: "#111827",
	}

	const metaRow: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		gap: 14,
		flexWrap: "wrap",
		color: "#4B5563",
		fontSize: 13,
	}

	const bullet: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		gap: 6,
		whiteSpace: "nowrap",
	}

	const dim: React.CSSProperties = { color: "#6B7280" }

	const right: React.CSSProperties = {
		display: "flex",
		alignItems: "center",
		gap: 14,
	}

	const prices: React.CSSProperties = { textAlign: "right" }

	const oldPriceSt: React.CSSProperties = {
		fontSize: 12,
		color: "#9CA3AF",
		textDecoration: "line-through",
		lineHeight: 1,
	}

	const priceSt: React.CSSProperties = {
		fontSize: 22,
		fontWeight: 800,
		color: "#111827",
		lineHeight: 1.2,
	}

	const btn: React.CSSProperties = {
		padding: "10px 18px",
		background: "#002773",
		borderRadius: 12,
		border: "none",
		fontWeight: 700,
		cursor: "pointer",
	}

	return (
		<div style={card}>
			<div style={left}>
				<div style={carBox}>
					{/* simple car silhouette */}
					<svg width="90" height="44" viewBox="0 0 90 44" aria-hidden>
						<rect x="8" y="18" width="58" height="16" rx="6" fill="#E5E7EB" />
						<rect x="20" y="10" width="32" height="12" rx="4" fill="#D1D5DB" />
						<circle cx="24" cy="36" r="6" fill="#111827" />
						<circle cx="58" cy="36" r="6" fill="#111827" />
						<rect x="12" y="24" width="8" height="6" rx="1" fill="#fff" />
					</svg>
				</div>

				<div style={infoCol}>
					<div style={titleSt}>{title}</div>

					<div style={metaRow}>
						<div style={bullet}>
							{/* people icon */}
							<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
								<circle cx="8" cy="7" r="3" fill="#6B7280" />
								<path
									d="M2 18c0-3 3-5 6-5s6 2 6 5"
									fill="none"
									stroke="#6B7280"
									strokeWidth="2"
								/>
							</svg>
							<span>up to {people}</span>
						</div>

						<div style={bullet}>
							{/* luggage icon */}
							<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
								<rect
									x="6"
									y="7"
									width="12"
									height="11"
									rx="2"
									fill="#6B7280"
								/>
								<rect x="10" y="4" width="4" height="3" rx="1" fill="#6B7280" />
							</svg>
							<span>up to {luggage}</span>
						</div>

						<span style={dim}>•</span>

						<div style={bullet}>
							<span>{waitingText}</span>
						</div>

						<span style={dim}>•</span>

						<div style={bullet}>
							<span>{meetText}</span>
						</div>

						<span style={dim}>•</span>

						<div style={bullet}>
							<span>{refundableText}</span>
						</div>
					</div>

					<div style={{ ...dim, fontSize: 12 }}>{carLabel}</div>
				</div>
			</div>

			<div style={right}>
				<div style={prices}>
					{oldPrice != null && <div style={oldPriceSt}>${oldPrice}</div>}
					<div style={priceSt}>${price}</div>
				</div>
				<button style={btn} onClick={onChoose}>
					Choose
				</button>
			</div>
		</div>
	)
}
