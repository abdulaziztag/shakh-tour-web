import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { toast } from "react-toastify"

import { APP_KEYS, TOKEN } from "@/shared/constants/env"
import { getLanguageFromUrl } from "@/shared/libs/get-lang"
import { ResponseDataOptional } from "@/shared/types/response-data"

const clientApi = axios.create({
	baseURL: APP_KEYS.baseUrl,
})

clientApi.interceptors.request.use(
	<T>(config: InternalAxiosRequestConfig<ResponseDataOptional<T>>) => {
		const lang = getLanguageFromUrl()
		const token = localStorage.getItem(TOKEN.AUTH_TOKEN)
		config.headers["Accept-Language"] = lang
		config.headers["Authorization"] = `Bearer ${token}`
		return config
	},
)

clientApi.interceptors.response.use(
	<T>(response: AxiosResponse<ResponseDataOptional<T>>) => {
		if (!response?.data?.success) {
			toast.error(response.data?.message)
		}
		return response
	},
	(err) => {
		const errorsObj = err.response?.data?.errors
		if (typeof errorsObj === "object") {
			const errArr = Object.values(errorsObj)
			errArr.forEach((errObj: any) => {
				const errs = errObj[getLanguageFromUrl()]
				errs.forEach((msg: string) => toast.error(msg))
			})
		}
		return Promise.reject(err)
	},
)

export default clientApi
