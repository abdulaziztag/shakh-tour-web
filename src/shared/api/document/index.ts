import apiBase from "../base-api.ts"

export interface IDocumentList {
	data: Daum[]
}

export interface Daum {
	id: number
	title_ru: string
	title_uz: string
	contents: Content[]
	image_ru: string
	image_uz: string
}

export interface Content {
	id: number
	solution_id: number
	content_uz: string
	content_ru: string
	created_at: string
	updated_at: string
}

export const getDocumentList = async () => {
	const response = await apiBase.get<IDocumentList>("/solutions")
	return response?.data?.data
}
