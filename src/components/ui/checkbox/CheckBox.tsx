import { FC, PropsWithChildren } from 'react'
import s from './CheckBox.module.scss'
import cn from 'clsx'

interface ICheckBox {
	isChecked?: boolean
	onClick: () => void
	className?: string
}

const CheckBox: FC<PropsWithChildren<ICheckBox>> = ({
	isChecked,
	onClick,
	className,
	children,
}) => {
	return (
		<button className={cn(s.checkbox, className)} onClick={onClick}>
			<span
				className={cn({
					[s.active]: isChecked,
				})}
			/>
			<span> {children} </span>
		</button>
	)
}

export default CheckBox
