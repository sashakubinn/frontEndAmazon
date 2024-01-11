'use client'
import AdminList from '@/components/ui/admin/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { useAdminProducts } from '../hooks/useAdminProducts'

const Products: FC = () => {
	const { data, mutate } = useAdminProducts()
	return (
		<>
			<Heading size='2xl'> Products </Heading>
			<AdminList listItems={data} removeHandler={mutate} />
		</>
	)
}

export default Products
