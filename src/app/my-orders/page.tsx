import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
	title: 'Orders',
	...NO_INDEX_PAGE,
}

export default function OrdersPage() {
	return <MyOrders />
}
