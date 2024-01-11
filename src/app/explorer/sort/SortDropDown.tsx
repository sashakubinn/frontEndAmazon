import Select from '@/components/ui/select/Select'
import { useFilters } from '@/hooks/useFilters'
import { useOutside } from '@/hooks/useOutside'
import { EnumProductSort } from '@/services/product/product.types'
import { FC } from 'react'
import { SORT_SELECT_DATA } from './sort-select.data'
import s from './SortDropDown.module.css'

const SortDropDown: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const selectValue = SORT_SELECT_DATA.find(
		value => value.key === queryParams.sort
	)
	return (
		<div className={s.wrapper}>
			<Select<EnumProductSort>
				data={SORT_SELECT_DATA}
				onChange={value => updateQueryParams('sort', value.key.toString())}
				title='Sort By'
				value={selectValue}
			/>
		</div>
	)
}

export default SortDropDown
