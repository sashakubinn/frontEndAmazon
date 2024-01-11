'use client'

import Button from '@/components/ui/button/Button'
import Catalog from '@/components/ui/catalog/Catalog'
import Heading from '@/components/ui/heading/Heading'
import { useFilters } from '@/hooks/useFilters'
import { ProductService } from '@/services/product/product.service'
import { TypeProductPagination } from '@/types/product.interface'
import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { FC, useState } from 'react'
import Filters from './filters/Filters'
import Pagination from './pagination/Pagination'
import s from './ProductsExplorer.module.scss'
import SortDropDown from './sort/SortDropDown'

interface IProductsExplorer {
	initialProducts: TypeProductPagination
}

const ProductsExplorer: FC<IProductsExplorer> = ({ initialProducts }) => {
	const [isFilterOpen, setIsFilterOpen] = useState(false)
	const { isFilterUpdated, queryParams, updateQueryParams } = useFilters()

	const { data, isFetching } = useQuery({
		queryKey: ['product explorer', queryParams],
		queryFn: () => ProductService.getAll(queryParams),
		initialData: initialProducts,
		enabled: isFilterUpdated,
	})

	const numberPages = data ? Math.ceil(data.length / +queryParams.perPage) : 1

	return (
		<>
			<div className={s.container}>
				<Heading size='4xl'>
					{queryParams.searchTerm
						? `Search by query "${queryParams.searchTerm}"`
						: 'Explorer'}
				</Heading>
				<SortDropDown />
			</div>
			<div className={s.but}>
				<Button variant='white' onClick={() => setIsFilterOpen(!isFilterOpen)}>
					{isFilterOpen ? 'Close' : 'Open'} filters
				</Button>
			</div>
			<div
				className={cn(s.explorer, {
					[s.filterOpened]: isFilterOpen,
				})}
			>
				<aside>
					{' '}
					<Filters />{' '}
				</aside>
				<section>
					<Catalog products={data?.products || []} isLoading={isFetching} />
					<Pagination
						changePage={page => updateQueryParams('page', page.toString())}
						currentPage={queryParams.page}
						numberPages={numberPages}
					/>
				</section>
			</div>
		</>
	)
}

export default ProductsExplorer
