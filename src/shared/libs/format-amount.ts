/**
 * Display number values fetched from some api for users in a friendly format
 * @param {Number} num number to format
 * @param {String} separator what character to use between numbers
 * @param fixedUntil
 * @returns {String} returns formatted number in string
 * @example 9457 -> '9457' -> ['9','4','5','7'] -> ['9',' ','4','5','7'] -> '9 457'
 */
export default function formatAmount(
	num: number | undefined | null,
	separator: string = " ",
	fixedUntil: number = 2,
): string {
	if (!num) return "0"

	function putWhitespace(
		acc: string[],
		curr: string,
		currIdx: number,
	): string[] {
		const numLength = integerPart.length
		const subLength = numLength - currIdx

		if (subLength % 3 === 0 && subLength !== numLength) {
			return [separator, curr, ...acc]
		}

		return [curr, ...acc]
	}

	const [integerPart, fractionalPart] = num?.toString()?.split(".") ?? []

	const formattedInteger = integerPart
		.split("")
		.reduceRight(putWhitespace, [])
		.join("")

	return fractionalPart
		? `${formattedInteger}.${fractionalPart.slice(0, fixedUntil)}`
		: formattedInteger
}
