'use client'
import Heading from '@/components/ui/heading/Heading'
import { ProductService } from '@/services/product/product.service'
import { IProduct } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import ProductInformation from './product-information/ProductInformation'
import ProductGallery from './ProductGallery'
import s from './Product.module.css'
import ProductsReviewsCount from './ProductsReviewsCount'
import SimilarProducts from './SimilarProducts'
import ProductReviews from './product-reviews/ProductReviews'

interface IProductPage {
	initialProduct: IProduct
	similarProducts: IProduct[]
	slug?: string
}

const Product: FC<IProductPage> = ({
	initialProduct,
	similarProducts,
	slug = '',
}) => {
	const { data: product } = useQuery({
		queryKey: ['get product'],
		queryFn: () => ProductService.getBySlug(slug),
		initialData: initialProduct,
		enabled: !!slug,
	})
	return (
		<>
			<Heading size='4xl'> {product.name} </Heading>
			<ProductsReviewsCount product={product} />
			<div
				className={s.position}
				style={{
					gridTemplateColumns: '1fr 1fr 1fr',
				}}
			>
				<ProductGallery images={product.images} />
				<div className={s.description}>
					<div className={s.description_text}> Description: </div>
					{product.description}
				</div>
				<ProductInformation product={product} />
			</div>
			<SimilarProducts similarProducts={similarProducts} />
			<ProductReviews reviews={product.reviews} productId={product.id} />
		</>
	)
}

export default Product
