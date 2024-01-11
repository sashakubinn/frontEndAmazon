'use client'
import AdminList from '@/components/ui/admin/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { useAdminCategories } from '../hooks/useAdminCategories'
import { useAdminOrders } from '../hooks/useAdminOrders'

const Orders: FC = () => {
	const { data } = useAdminOrders()
	return (
		<>
			<Heading size='2xl'>Orders</Heading>
			<AdminList listItems={data} />
		</>
	)
}

export default Orders
