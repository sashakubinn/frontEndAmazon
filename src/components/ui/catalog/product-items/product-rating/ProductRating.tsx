import { RATINGS_VARIANTS } from '@/app/explorer/filters/ratings-group/ratings-variants.data'
import { IProduct } from '@/types/product.interface'
import { IReview } from '@/types/review.interface'
import { generateRating } from '@/utils/generateRating'
import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import s from './ProductRating.module.css'

interface IProductRating {
	product: IProduct
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const { rating } = generateRating()
	return (
		<div>
			<span>
				<Rating
					readonly
					initialValue={rating}
					SVGstyle={{
						display: 'inline-block',
					}}
					size={26}
					allowFraction
					transition
				/>
				<span className={s.ml}>{rating} reviews</span>
			</span>
		</div>
	)
}

export default ProductRating
