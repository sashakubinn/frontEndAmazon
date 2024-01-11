import { getAdminUrl } from './../../../../../config/url.config'
import { IMenuItem } from './menu.interface'

export const ADMIN_MENU: IMenuItem[] = [
	{
		label: 'Dashboard',
		link: getAdminUrl(),
	},
	{
		label: 'Products',
		link: getAdminUrl('/products'),
	},
	{
		label: 'Categories',
		link: getAdminUrl('/categories'),
	},
	{
		label: 'Reviews',
		link: getAdminUrl('/reviews'),
	},
	{
		label: 'Orders',
		link: getAdminUrl('/orders'),
	},
]
