import { EnumProductSort } from '@/services/product/product.types'

export function formatEnumLabel(value: EnumProductSort): string {
	switch (value) {
		case EnumProductSort.HIGH_PRICE:
			return 'High Price'
		case EnumProductSort.LOW_PRICE:
			return 'Low Price'
		case EnumProductSort.NEWEST:
			return 'Newest'
		case EnumProductSort.OLDEST:
			return 'Oldest'
		default:
			return ''
	}
}
