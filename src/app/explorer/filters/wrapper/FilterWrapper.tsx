import { FC, PropsWithChildren } from 'react'
import s from './FilterWrapper.module.css'
interface IFilterWrapper {
	title?: string
}

const FilterWrapper: FC<PropsWithChildren<IFilterWrapper>> = ({
	children,
	title,
}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.title}>{title}</div>
			<div>{children}</div>
		</div>
	)
}

export default FilterWrapper
