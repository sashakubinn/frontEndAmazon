import { TypeDataFilter } from '@/services/product/product.types'

export interface IFilterState {
	isFilterUpdated: boolean
	queryParams: TypeDataFilter
}

export interface IFilterActionsPayload {
	key: keyof TypeDataFilter
	value: string
}
