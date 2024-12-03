import { create } from "zustand"

import { getAboutList, IAboutList } from "../../api/about"

interface IAboutState {
	aboutList?: IAboutList
	fetchAbout: () => Promise<void>
	aboutReset: () => void
}

const state: Partial<IAboutState> = {
	aboutList: undefined,
}

export const useAboutStore = create<IAboutState>((set, _) => ({
	...state,
	fetchAbout: async () => {
		const aboutList = await getAboutList()
		set({ aboutList })
	},
	aboutReset: () => {
		set({ aboutList: undefined })
	},
}))
