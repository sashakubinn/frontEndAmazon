import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'
import Reviews from './Reviews'

export const metadata: Metadata = {
	title: 'Reviews',
	...NO_INDEX_PAGE,
}

export default function AuthPage() {
	return <Reviews />
}
