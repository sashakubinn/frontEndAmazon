'use client'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import s from './Sidebar.module.css'
import cn from 'clsx'
import { FiLogOut } from 'react-icons/fi'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useCategories } from '@/hooks/queries/useCategories'
import { ADMIN_MENU } from './admin-menu/admin-menu.data'
import { convertToMenuItems } from './admin-menu/convert-to-menu-items'

const Sidebar = () => {
	const { data, isLoading } = useCategories()

	const pathname = usePathname()
	const { user } = useAuth()
	const { logout } = useActions()
	const { isAdminPanel } = useIsAdminPanel()
	return (
		<aside
			className={s.container}
			style={{
				minHeight: 'calc(120vh-91px)',
				height: 'calc(120vh)',
			}}
		>
			<div className={s.top}>
				{isLoading ? (
					<div> Loading ... </div>
				) : data ? (
					<>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								item => (
									<li key={item.link}>
										<Link
											href={item.link}
											className={cn(
												[s.category],
												pathname === item.link ? [s.primary] : [s.whit]
											)}
										>
											{item.label}
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div> Categories not found </div>
				)}
			</div>
			{!!user && (
				<button className={s.logout} onClick={() => logout()}>
					<FiLogOut />
					<span className={s.ml}>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
