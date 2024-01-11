import { IMenuItem } from './menu.interface'
import { ICategory } from '@/types/category.interface'

export const convertToMenuItems = (categories: ICategory[]): IMenuItem[] =>
	categories.map(category => ({
		label: category.name,
		link: `/category/${category.slug.toLowerCase()}`,
	}))
