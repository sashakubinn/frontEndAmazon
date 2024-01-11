import { IReview } from './review.interface'
import { ICategory } from './category.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	reviews: IReview[]
	images: string[]
	createdAt: string
	category: ICategory
}

export interface IProductDetails {
	product: IProduct
}

export type TypeProduct = {
	products: IProduct[]
}

export type TypeProductPagination = {
	length: number
	products: IProduct[]
}
