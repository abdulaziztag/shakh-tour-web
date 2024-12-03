const defaultLang = "ru"
export function getLanguageFromUrl(): string {
	if (typeof window === "undefined") {
		// Handle non-browser environment (optional)
		return defaultLang
	}

	const url = window.location.href
	const regex = /\/([a-z]{2})(?:\/|$)/ // // Matches two-letter language codes
	const match = url.match(regex)
	return match ? match[1] : defaultLang
}
