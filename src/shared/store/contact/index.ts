import { create } from "zustand"

import { getContactList, IContactList } from "../../api/contact"

interface IContactState {
	contactList?: IContactList["data"]
}

interface IContact extends IContactState {
	fetchContact: () => Promise<void>
	contactReset: () => void
}

const state = {
	contactList: [],
}

export const useContactStore = create<IContact>((set, _) => ({
	...state,
	fetchContact: async () => {
		const contactList = await getContactList()

		set({ contactList: contactList.data })
	},

	contactReset: () => {
		set(state)
	},
}))
