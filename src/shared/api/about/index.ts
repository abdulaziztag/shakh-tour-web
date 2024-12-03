import apiBase from "../base-api.ts"

export interface IAboutList {
	"about-company": AboutCompany
	"our-mission": OurMission
	team: TeamList
	"team-members": Member[]
}

export interface AboutCompany {
	id: number
	title_ru: string
	title_uz: string
	text_uz: string
	text_ru: string
	image: string
}

export interface OurMission {
	id: number
	title_ru: string
	title_uz: string
	text_uz: string
	text_ru: string
	image: string
}

export interface Member {
	id: number
	image: string
	full_name: string
	job_uz: string
	job_ru: string
}
export interface TeamList {
	id: number
	title_ru: string
	title_uz: string
	text_uz: string
	text_ru: string
}

export const getAboutList = async () => {
	const response = await apiBase.get<IAboutList>("/about-us")
	return response?.data
}
