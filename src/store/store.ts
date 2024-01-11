import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { carouselReducer } from './carousel/carousel.slice'
import cartSlice from './cart/cart.slice'
import filtersSlice from './filters/filters.slice'
import userSlice from './user/user.slice'

const persistConfig = {
	key: 'amazon-shop',
	storage,
	whitelist: ['cart'],
}

const rootReducer = combineReducers({
	user: userSlice,
	cart: cartSlice,
	carousel: carouselReducer,
	filters: filtersSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})

export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>
