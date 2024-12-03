import { create } from "zustand"

import { getNewsInfo, INewsList } from "@/shared/api/news"

interface IBlogState {
	blogInfo?: INewsList
}

interface IBlog extends IBlogState {
	fetchBlogs: (id: number | null) => Promise<void>
	blogInfoReset: () => void
}

const state = {
	blogInfo: undefined,
}

export const useBlogInfoStore = create<IBlog>((set) => ({
	...state,
	fetchBlogs: async (id: number | null) => {
		const blogInfo = await getNewsInfo(Number(id))
		set({ blogInfo: blogInfo.data })
	},

	blogInfoReset: () => {
		set(state)
	},
}))
