import { IProduct } from '@/types/product.interface'
import { IOrder } from './order.interface'
export interface IUser {
	id: number
	email: string
	name: string
	avatarPath: string
	phone: string
	isAdmin: boolean
}

export interface IFullUser extends IUser {
	favorites: IProduct[]
	orders: IOrder[]
}
