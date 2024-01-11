'use client'

import Catalog from '@/components/ui/catalog/Catalog'
import Layout from '@/components/ui/layout/Layout'
import { useProfile } from '@/hooks/useProfile'
import { NextPage } from 'next'
import { FC } from 'react'

const Favorites: FC = () => {
	const { profile } = useProfile()

	return (
		<>
			{/*  <Catalog products={profile?.favorites || []} title='Favorites' /> */}
			<Catalog products={[]} title='Favorites' />
		</>
	)
}

export default Favorites
