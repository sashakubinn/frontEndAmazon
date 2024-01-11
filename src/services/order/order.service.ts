import { IOrder } from '@/types/order.interface'
import { instance } from './../../api/api.interceptor'

const ORDER = 'order'

export const OrderService = {
	async getAll() {
		return instance<IOrder[]>({
			url: ORDER,
			method: 'GET',
		})
	},
}
