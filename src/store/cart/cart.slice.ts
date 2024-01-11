import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IAddToCart,
	ICartInitialState,
	IChangeQuantity,
} from './cart.interface'
const initialState: ICartInitialState = {
	items: [],
}
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCart>) => {
			state.items.push({
				...action.payload,
				id: state.items.length,
			})
		},
		removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== action.payload.id)
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantity>) => {
			const { id, type } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) type === 'plus' ? item.quantity++ : item.quantity--
		},
		reset: state => {
			state.items = []
		},
	},
})
export const { addToCart, changeQuantity, removeFromCart, reset } =
	cartSlice.actions
export default cartSlice.reducer
