import CheckBox from '@/components/ui/checkbox/CheckBox'
import { useFilters } from '@/hooks/useFilters'
import { generateRating } from '@/utils/generateRating'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import FilterWrapper from '../wrapper/FilterWrapper'
import { RATINGS_VARIANTS } from './ratings-variants.data'
import { updateRatingsQuery } from './update-ratings-query'

const RatingGroup: FC = () => {
	const { queryParams, updateQueryParams } = useFilters()
	return (
		<FilterWrapper title='Number of reviews'>
			{RATINGS_VARIANTS.map(ratings => (
				<CheckBox
					isChecked={queryParams.ratings?.includes(ratings.toString())}
					onClick={() =>
						updateQueryParams(
							'ratings',
							updateRatingsQuery(queryParams.ratings || '', ratings.toString())
						)
					}
					key={ratings}
				>
					<Rating
						readonly
						initialValue={ratings}
						SVGstyle={{
							display: 'inline-block',
						}}
						size={26}
						allowFraction
						transition
					/>
				</CheckBox>
			))}
		</FilterWrapper>
	)
}

export default RatingGroup
