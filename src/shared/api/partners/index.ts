import apiBase from "../base-api.ts"

export const getPartnersList = async () => {
	const response = await apiBase.get<{ data: { image: string }[] }>("/partners")
	return response?.data?.data
}
