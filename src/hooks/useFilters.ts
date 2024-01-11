import { useEffect } from 'react'
import { useTypedSelector } from './useTypedSelector'
import { useActions } from './useActions'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { TypeDataFilter } from '@/services/product/product.types'
export const useFilters = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const { updateQueryParam } = useActions()
	const { replace } = useRouter()

	const { isFilterUpdated, queryParams } = useTypedSelector(
		state => state.filters
	)
	useEffect(() => {
		searchParams.forEach((value, key) => {
			updateQueryParam({
				key: key as keyof TypeDataFilter,
				value,
			})
		})
	}, [])
	const updateQueryParams = (key: keyof TypeDataFilter, value: string) => {
		const newParams = new URLSearchParams(searchParams.toString())
		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}
		replace(pathname + `?${newParams.toString().replace(/%7C/g, '|')}`)
		updateQueryParam({ key, value })
	}
	return { updateQueryParams, queryParams, isFilterUpdated }
}
