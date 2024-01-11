import Range from '@/components/ui/range/Range'
import { useFilters } from '@/hooks/useFilters'
import { FC } from 'react'
import FilterWrapper from '../wrapper/FilterWrapper'

const PriceGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()

	return (
		<FilterWrapper title='Price from/to'>
			<Range
				max={2000}
				fromInitialValue={Number(queryParams.minPrice)}
				toInitialValue={Number(queryParams.maxPrice)}
				onChangeFromValue={(value: any) => updateQueryParams('minPrice', value)}
				onChangeToValue={(value: any) => updateQueryParams('maxPrice', value)}
			/>
		</FilterWrapper>
	)
}

export default PriceGroup
