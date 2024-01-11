'use client'
import AdminList from '@/components/ui/admin/admin-list/AdminList'
import Heading from '@/components/ui/heading/Heading'
import { FC } from 'react'
import { useAdminCategories } from '../hooks/useAdminCategories'

const Categories: FC = () => {
	const { data, mutate } = useAdminCategories()
	return (
		<>
			<Heading size='2xl'> Categories </Heading>
			<AdminList listItems={data} removeHandler={mutate} />
		</>
	)
}

export default Categories
