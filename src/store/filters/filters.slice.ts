import { EnumProductSort } from '@/services/product/product.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilterActionsPayload, IFilterState } from './filters.interface'

const initialState: IFilterState = {
	isFilterUpdated: false,
	queryParams: {
		sort: EnumProductSort.NEWEST,
		searchTerm: '',
		ratings: '',
		page: 1,
		perPage: 20,
	},
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParam: (state, action: PayloadAction<IFilterActionsPayload>) => {
			const { key, value } = action.payload
			state.queryParams[key] = value
			state.isFilterUpdated = true
		},
		resetFilterUpdate: state => {
			state.isFilterUpdated = false
		},
	},
})

export const { resetFilterUpdate, updateQueryParam } = filtersSlice.actions
export default filtersSlice.reducer
