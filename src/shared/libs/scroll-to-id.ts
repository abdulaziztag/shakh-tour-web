export const onClickToScroll = (url: string) => {
	let block: any = document.querySelector(`#${url}`)
	if (block) {
		block.scrollIntoView({ behavior: "smooth" })
	} else {
		console.warn(`Element with not found`)
	}
}
