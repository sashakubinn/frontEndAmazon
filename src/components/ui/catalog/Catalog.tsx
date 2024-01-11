'use client'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import s from './CatalogPagination.module.css'
import ProductItem from './product-items/product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
	isPagination?: boolean
}

const Catalog: FC<ICatalog> = ({
	products,
	isLoading,
	title,
	isPagination = false,
}) => {
	return (
		<section>
			{title && <Heading size='4xl'>{title}</Heading>}
			{products.length ? (
				<>
					<div className={s.container}>
						{products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
					{isPagination && <Button variant='orange'> Load more </Button>}
				</>
			) : (
				<Heading size='4xl'>There is no products</Heading>
			)}
		</section>
	)
}

export default Catalog
