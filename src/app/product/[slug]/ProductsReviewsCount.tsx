import ProductRating from '@/components/ui/catalog/product-items/product-rating/ProductRating'
import { IProduct } from '@/types/product.interface'
import { Link as ScrollLink } from 'react-scroll'
import { FC } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import s from './Product.module.css'

interface IProductReviews {
	product: IProduct
}

const ProductsReviewsCount: FC<IProductReviews> = ({ product }) => {
	const reviewsLength = product.reviews.length
	if (!reviewsLength) return null

	return (
		<div>
			<ProductRating product={product} />
			<div>
				<ScrollLink
					className={s.reviews}
					to='reviews'
					smooth={true}
					offset={-50}
					duration={1000}
				>
					{reviewsLength} Reviews
					<FiChevronRight className={s.inline} />
				</ScrollLink>
			</div>
		</div>
	)
}

export default ProductsReviewsCount
