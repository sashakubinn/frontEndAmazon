import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'
import Auth from './auth'

export const metadata: Metadata = {
	title: 'Auth',
	description: 'Thats Auth Page',
	...NO_INDEX_PAGE,
}

export default function AuthPage() {
	return <Auth />
}
