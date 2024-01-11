import { IProduct } from '@/types/product.interface'
export type TypeData = {
	name: string
	price: number
	description?: string
	images: string[]
	categoryId: number
}

export type TypeDataFilter = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: string | number
	perPage: string | number
	ratings?: string
	minPrice?: string
	maxPrice?: string
	categoryId?: string
}

export enum EnumProductSort {
	HIGH_PRICE = 'high_price',
	LOW_PRICE = 'low_price',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export type TypeParamsFilters = {
	searchParams: TypeDataFilter
}
