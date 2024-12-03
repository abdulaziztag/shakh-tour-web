export const APP_KEYS = {
	baseUrl: `${process.env.API_HOST}/api/`,
	IMAGE_URL: `${process.env.API_HOST}`,
} as const

export enum TOKEN {
	AUTH_TOKEN = "AUTH_TOKEN",
}
