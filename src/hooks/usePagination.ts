import { IProduct } from '@/types/product.interface'
import { TypeProductPagination } from './../types/product.interface'
import { ProductService } from '@/services/product/product.service'
import { EnumProductSort } from '@/services/product/product.types'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

interface IUsePagination {
	sortType: EnumProductSort
	page: number
	data: TypeProductPagination
}

export const usePagination = ({ sortType, page, data }: IUsePagination) => {
	const {
		data: response,
		isLoading,
		error,
		refetch,
	} = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType,
				ratings: '',
			}),
		initialData: data,
	})
	return { response, isLoading, refetch }
}
