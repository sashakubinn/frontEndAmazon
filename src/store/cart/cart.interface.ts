import { ICartItem } from './../../types/cart.interface'
export interface ICartInitialState {
	items: ICartItem[]
}

export interface IAddToCart extends Omit<ICartItem, 'id'> {}

export interface IChangeQuantity extends Pick<ICartItem, 'id'> {
	type: 'minus' | 'plus'
}
