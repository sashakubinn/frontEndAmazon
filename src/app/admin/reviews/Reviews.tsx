'use client'
import AdminList from '@/components/ui/admin/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { useAdminReviews } from '../hooks/useAdminReviews'

const Reviews: FC = () => {
	const { data } = useAdminReviews()
	return (
		<>
			<Heading size='2xl'> Reviews </Heading>
			<AdminList listItems={data} />
		</>
	)
}

export default Reviews
