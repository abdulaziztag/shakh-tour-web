import apiBase from "../base-api.ts"

export interface IForm {
	first_name: string
	last_name: string
	company: string
	phone_number: string
}

export const postFormData = async (data: IForm) => {
	const response = await apiBase.post("/contact-form", data)
	return response?.data
}
