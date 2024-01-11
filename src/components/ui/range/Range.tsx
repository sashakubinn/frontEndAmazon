import { useDebounce } from '@/hooks/useDebounce'
import { FC, useEffect, useState } from 'react'
import s from './Range.module.css'

interface IRange {
	min?: number
	max?: number
	fromInitialValue?: number
	toInitialValue?: number
	onChangeFromValue: (value: string | number) => void
	onChangeToValue: (value: string | number) => void
}

const Range: FC<IRange> = ({
	min = 0,
	max,
	onChangeFromValue,
	onChangeToValue,
	fromInitialValue,
	toInitialValue,
}) => {
	const [fromValue, setFromValue] = useState(fromInitialValue || '')
	const [toValue, setToValue] = useState(toInitialValue || '')
	const debouncedFromValue = useDebounce(fromValue, 500)
	const debouncedToValue = useDebounce(toValue, 500)

	useEffect(() => {
		onChangeFromValue(debouncedFromValue)
	}, [debouncedFromValue])
	useEffect(() => {
		onChangeToValue(debouncedToValue)
	}, [debouncedToValue])
	return (
		<div>
			<input
				className={s.range}
				type='number'
				min={min}
				max={max}
				placeholder='From'
				value={fromValue}
				onChange={e => setFromValue(e.target.value)}
			/>
			{' - '}
			<input
				className={s.range}
				type='number'
				min={min}
				max={max}
				placeholder='To'
				value={toValue}
				onChange={e => setToValue(e.target.value)}
			/>
		</div>
	)
}

export default Range
