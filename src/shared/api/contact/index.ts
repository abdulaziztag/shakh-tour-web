import apiBase from "../base-api.ts"

export interface IContactList {
	data: Daum[]
}

export interface Daum {
	id: number
	key: string
	value_uz: string
	value_ru: string
}

export const getContactList = async () => {
	const response = await apiBase.get<IContactList>("/contexts")
	return response?.data
}
