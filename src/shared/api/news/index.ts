import apiBase from "../base-api.ts"

export interface INewsInfo {
	data: INewsList
}

export interface INewsList {
	id: number
	title_ru: string
	title_uz: string
	text_ru: string
	text_uz: string
	image_uz: string
	image_ru: string
	category: Category
}

export interface Category {
	id: number
	title_ru: string
	title_uz: string
}

export const getNewsList = async (page?: number) => {
	const config = {
		params: { page: page || 1, per_page: 9 },
	}
	const response = await apiBase.get<{
		data: INewsList[]
		meta: { total: number }
	}>("/news", config)

	return {
		data: response?.data?.data || [],
		count: response?.data?.meta?.total || 0,
	}
}

export const getNewsInfo = async (id: number | null) => {
	const response = await apiBase.get<{ data: INewsList }>("/news/" + id)

	return response.data
}
