import '@/assets/styles/globals.css'
import Header from '@/components/ui/layout/header/Header'
import Sidebar from '@/components/ui/layout/sidebar/Sidebar'
import { getSiteUrl } from '@/config/url.config'
import { SITE_NAME } from '@/constants/app.constants'
import Providers from '@/providers/Providers'
import { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import { PropsWithChildren } from 'react'
import s from './layout/Layout.module.css'

export const metadata: Metadata = {
	icons: {
		icon: {
			url: '/favicon.png',
		},
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		emails: ['info@amazon.com'],
		siteName: SITE_NAME,
	},
}

const golos = Golos_Text({
	weight: ['400', '500', '600'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos',
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={golos.variable}>
			<body>
				<Providers>
					<div className={s.bg}>
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
				</Providers>
				<div id='modal'></div>
			</body>
		</html>
	)
}
