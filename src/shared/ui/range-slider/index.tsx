import { Flex, RangeSlider as MantineRangeSlider, Text } from "@mantine/core"
import React, { useState } from "react"

import s from "./range-slider.module.scss"

export const RangeSlider = () => {
	const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])

	return (
		<>
			<Flex justify={"space-between"} className={s.rangeSliderTop}>
				<Text className={s.rangeSliderInfoPrice}>Total:</Text>
				<Text className={s.rangeSliderPrice}>
					{priceRange[0]} million UZS - {priceRange[1]} million UZS
				</Text>
			</Flex>
			<MantineRangeSlider
				value={priceRange}
				onChange={setPriceRange}
				showLabelOnHover={false}
				min={0}
				max={50}
				step={1}
				marks={[{ value: 0 }, { value: 50 }]}
				classNames={{
					root: s.rangeSlider,
					track: s.rangeSliderTrack,
					thumb: s.rangesliderThumb,
					bar: s.rangeSliderBar,
					mark: s.rangeSliderMark,
				}}
			/>
		</>
	)
}
