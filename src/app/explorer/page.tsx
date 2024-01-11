/*
 TODO: Filters

	[x] - filters.slice.ts
	[x] - useFilters
	[] - ProductExplorer
	[] - Pagination
	[] - SSG
	[] - Sort 
	[] - Filters
*/
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import { ProductService } from '@/services/product/product.service'
import {
	TypeDataFilter,
	TypeParamsFilters,
} from '@/services/product/product.types'
import type { Metadata } from 'next'
import ProductsExplorer from './ProductsExplorer'

export const metadata: Metadata = {
	title: 'Explorer',
	...NO_INDEX_PAGE,
}

export const revalidate = 60

async function getProducts(searchParams: TypeDataFilter) {
	const data = await ProductService.getAll(searchParams)
	return data
}
export default async function ExplorerPage({
	searchParams,
}: TypeParamsFilters) {
	const data = await getProducts(searchParams)
	return <ProductsExplorer initialProducts={data} />
}
