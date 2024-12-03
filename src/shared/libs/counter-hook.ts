import { useEffect, useState } from "react"

export const useCounterHook = (sek?: number) => {
	const [counter, setCounter] = useState<number>(sek || 60)
	useEffect(() => {
		const interval = setInterval(() => {
			if (counter === 0) {
				clearInterval(interval)
			} else {
				setCounter(counter - 1)
			}
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [counter])
	return { counter, setCounter }
}
