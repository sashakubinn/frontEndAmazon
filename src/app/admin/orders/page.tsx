import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'
import Orders from './Orders'

export const metadata: Metadata = {
	title: 'Orders',
	...NO_INDEX_PAGE,
}

export default function AuthPage() {
	return <Orders />
}
