import { IProduct } from '@/types/product.interface'
import { formatToCurrency } from '@/utils/format-to-currency'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import AddToCart from '../add-to-cart/AddToCart'
import FavoriteButton from '../favorite-button/FavoriteButton'
import ProductRating from '../product-rating/ProductRating'
import s from './ProductItem.module.css'

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={s.container}>
			<div className={s.wrapper}>
				<div className={s.icons}>
					<FavoriteButton productId={product.id} />
					<AddToCart product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						alt=''
						width={355}
						height={250}
						src={product.images[0]}
						className={s.image}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className={s.name}>{product.name}</h3>
			</Link>
			<Link href={`/category/${product.category.slug.toLowerCase()}`}>
				<div className={s.category}>{product.category.name}</div>
			</Link>
			<div className={s.rating}>
				<ProductRating product={product} isText />
			</div>
			<div className={s.price}>{formatToCurrency(product.price)}</div>
		</div>
	)
}

export default ProductItem
