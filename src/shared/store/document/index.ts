import { create } from "zustand"

import { Daum, getDocumentList } from "@/shared/api/document"

interface IDocumentState {
	documentList?: Daum[]
}

interface IDocument extends IDocumentState {
	fetchDocument: () => Promise<void>
	documentReset: () => void
}

const state = {
	documentList: [],
}

export const useDocumentStore = create<IDocument>((set, _) => ({
	...state,
	fetchDocument: async () => {
		const documentList = await getDocumentList()

		set({ documentList: documentList })
	},

	documentReset: () => {
		set(state)
	},
}))
