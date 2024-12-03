import { create } from "zustand"

import { getPartnersList } from "../../api/partners"

interface IPartnersState {
	partnersList?: { image: string }[]
}

interface IPartners extends IPartnersState {
	fetchPartners: () => Promise<void>
	reset: () => void
}

const state = {
	partnersList: [],
}

export const usePartnersStore = create<IPartners>((set, get) => ({
	...state,
	fetchPartners: async () => {
		const partnersList = await getPartnersList()

		if (get().partnersList?.length) return
		set({ partnersList })
	},

	reset: () => {
		set(state)
	},
}))
