import { create } from "zustand"

import { getCategories, ICategoriesData } from "@/entities/categories"

interface ICategoriesState {
	categoriesList: ICategoriesData[]
	activeTab: number | null
	categoriesLoading?: boolean
}

interface ICategoriesType extends ICategoriesState {
	fetchCategories: () => Promise<void>
	categoriesReset: () => void
	setActiveTab: (tab: number) => void
}

const state: ICategoriesState = {
	categoriesList: [],
	activeTab: null,
	categoriesLoading: false,
}

export const useCategoriesStore = create<ICategoriesType>((set, get) => ({
	...state,
	fetchCategories: async () => {
		set({ categoriesLoading: true })
		const categoriesList = await getCategories()

		if (get().categoriesList?.length) return

		set({
			categoriesList,
			activeTab: categoriesList?.[0]?.id ?? null,
			categoriesLoading: false,
		})
	},

	categoriesReset: () => {
		set(state)
	},

	setActiveTab: (tab) => {
		set({ activeTab: tab })
	},
}))
