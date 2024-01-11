'use client'

import Loader from '@/components/loader/Loader'
import { usePagination } from '@/hooks/usePagination'
import { EnumProductSort } from '@/services/product/product.types'
import { TypeProductPagination } from '@/types/product.interface'
import { FC, useState } from 'react'
import SortDropDown from '../../../app/explorer/sort/SortDropDown'
import Button from '../button/Button'
import Heading from '../heading/Heading'
import s from './CatalogPagination.module.css'
import ProductItem from './product-items/product-item/ProductItem'

interface ICatalogPagination {
	data: TypeProductPagination
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)
	const { response, isLoading, refetch } = usePagination({
		data,
		page,
		sortType,
	})
	const onClickButton = () => {
		setPage(page + 1)
	}
	return (
		<section>
			{title && <Heading size='4xl'>{title}</Heading>}
			{isLoading ? (
				<Loader />
			) : response?.products?.length ? (
				<>
					<div className={s.container}>
						{response.products.map(product => (
							<ProductItem product={product} key={product.id} />
						))}
					</div>
					<div className={s.btn_center}>
						{Array.from({ length: response.length / 3 }).map((_, index) => {
							const pageNumber = index + 1
							const onClickButton = () => {
								setPage(pageNumber)
							}
							return (
								<Button
									key={index}
									onClick={onClickButton}
									variant='orange'
									size='small'
								>
									{pageNumber}
								</Button>
							)
						})}
					</div>
				</>
			) : (
				<Heading size='4xl'>There are no products</Heading>
			)}
		</section>
	)
}

export default CatalogPagination
