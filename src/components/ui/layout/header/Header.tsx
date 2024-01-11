'use client'

import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdAdminPanelSettings } from 'react-icons/md'
import Heading from '../../heading/Heading'
import Search from '../search/Search'
import HeaderCart from './header-cart/HeaderCart'
import HeaderProfile from './header-profile/HeaderProfile'
import s from './Header.module.css'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	return (
		<header
			className={s.container}
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr',
			}}
		>
			<Link href='/'>
				{isAdminPanel ? (
					<Heading size='4xl'>
						<p className={s.col_white}> Admin Panel </p>
					</Heading>
				) : (
					<Image
						priority
						src='/logo.svg'
						width={220}
						height={30}
						alt='Amazon Logo'
						className={s.logo}
					/>
				)}
			</Link>
			<Search />
			<div className={s.right_side}>
				{!isAdminPanel && (
					<Link href='/admin' className={s.admin}>
						<MdAdminPanelSettings size={28} color='#FF9902' />
					</Link>
				)}
				<Link href='/favorites' className={s.mx}>
					<AiOutlineHeart size={28} color='#FF9902' />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
