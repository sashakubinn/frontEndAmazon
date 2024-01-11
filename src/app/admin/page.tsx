import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'
import Dashboard from './Dashboard'

export const metadata: Metadata = {
	title: 'Admin',
	description: 'Thats Admin Page',
	...NO_INDEX_PAGE,
}

export default function AdminPage() {
	return <Dashboard />
}
