import * as userActions from './user/user.actions'
import * as cartSlice from './user/user.actions'
import {
	addToCart,
	changeQuantity,
	removeFromCart,
	reset,
} from './cart/cart.slice'
import carouselSlice from './carousel/carousel.slice'
import * as filtersSlice from './filters/filters.slice'
export const rootActions = {
	...userActions,
	addToCart,
	changeQuantity,
	removeFromCart,
	reset,
	...cartSlice,
	...carouselSlice.actions,
	...filtersSlice,
}
