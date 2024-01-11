import Loader from '@/components/loader/Loader'
import CheckBox from '@/components/ui/checkbox/CheckBox'
import { useCategories } from '@/hooks/queries/useCategories'
import { useFilters } from '@/hooks/useFilters'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'

const CategoryGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	const { data, isLoading } = useCategories()
	return (
		<FilterWrapper title='Categories'>
			{isLoading ? (
				<Loader />
			) : data?.length ? (
				data.map(category => {
					const isChecked = queryParams.categoryId === category.id.toString()
					return (
						<CheckBox
							isChecked={isChecked}
							onClick={() =>
								updateQueryParams(
									'categoryId',
									isChecked ? '' : category.id.toString()
								)
							}
							key={category.id}
						>
							{category.name}
						</CheckBox>
					)
				})
			) : (
				<p> There is no products </p>
			)}
		</FilterWrapper>
	)
}

export default CategoryGroup
