import axios from 'axios'
import { instance } from './../../api/api.interceptor'
import {
	IProduct,
	TypeProductPagination,
} from './../../types/product.interface'
import { TypeData, TypeDataFilter } from './product.types'

const PRODUCTS = 'products'

export const ProductService = {
	async getAll(queryData = {} as TypeDataFilter) {
		const { data } = await instance<TypeProductPagination>({
			url: PRODUCTS,
			method: 'GET',
			params: queryData,
		})
		return data
	},
	async getBySlug(slug: string) {
		const { data } = await instance<IProduct>({
			url: `${PRODUCTS}/by-slug/${slug}`,
			method: 'GET',
		})
		return data
	},
	async getByCategory(categorySlug: string) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/by-category/${categorySlug}`,
			method: 'GET',
		})
	},
	async getSimilar(id: string | number) {
		return instance<IProduct[]>({
			url: `${PRODUCTS}/similar/${id}`,
			method: 'GET',
		})
	},
	async getProductById(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'GET',
		})
	},
	async create(id: string | number) {
		return instance<IProduct>({
			url: PRODUCTS,
			method: 'POST',
		})
	},
	async update(id: string | number, data: TypeData) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'PUT',
			data,
		})
	},
	async delete(id: string | number) {
		return instance<IProduct>({
			url: `${PRODUCTS}/${id}`,
			method: 'DELETE',
		})
	},
}
