import Heading from '@/components/ui/heading/Heading'
import { NO_INDEX_PAGE } from '@/constants/app.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE,
}

export default function AuthPage() {
	return (
		<>
			<Heading size='4xl'>Thank you!</Heading>
		</>
	)
}
