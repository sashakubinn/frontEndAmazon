import ProductItem from '@/components/ui/catalog/product-items/product-item/ProductItem'
import Heading from '@/components/ui/heading/Heading'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import s from './Product.module.css'

interface ISimilarProducts {
	similarProducts: IProduct[]
}

const SimilarProducts: FC<ISimilarProducts> = ({ similarProducts }) => {
	return (
		<div className={s.similar}>
			<Heading size='3xl'>Similar products:</Heading>
			{similarProducts.length ? (
				<div>
					{similarProducts.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<h2>There are no similar products</h2>
			)}
		</div>
	)
}

export default SimilarProducts
