'use client'

import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'
import s from './Layout.module.css'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<Header />
			<div
				className={s.sidebar}
				style={{
					gridTemplateColumns: '0.7fr 4fr',
				}}
			>
				<Sidebar />
				<main className={s.child}>{children}</main>
			</div>
		</div>
	)
}

export default Layout
