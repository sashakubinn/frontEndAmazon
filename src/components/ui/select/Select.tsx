import { useOutside } from '@/hooks/useOutside'
import cn from 'clsx'
import { useState } from 'react'
import { BsCaretDownFill } from 'react-icons/bs'
import { ISelect } from './select.interface'
import s from './Select.module.css'

function Select<K>({ data, onChange, value, title }: ISelect<K>) {
	const [isOpen, setIsOpen] = useState(false)
	const onClickSelect = () => {
		setIsOpen(!isOpen)
	}
	return (
		<div className={s.select}>
			<button onClick={onClickSelect} className={s.position}>
				<span className={s.title}>{title && title}: </span>
				<span className={s.label}>{value?.label || 'Default'}</span>
				<BsCaretDownFill className={s.top} />
			</button>
			{isOpen && (
				<ul className={s.ul}>
					{data.map(item => (
						<li key={item.key?.toString()} className={s.selectOptions}>
							<button
								onClick={() => {
									onChange(item)
									setIsOpen(true)
								}}
								disabled={item.key === value?.key}
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
export default Select
