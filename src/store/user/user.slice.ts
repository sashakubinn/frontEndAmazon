import { IInitialState } from './user.interface'
import { register, login, logout, checkAuth } from './user.actions'
import { createSlice } from '@reduxjs/toolkit'
import { getStorageLocal } from '@/utils/local-storage'
const initialState: IInitialState = {
	user: getStorageLocal('user') || {
		email: 'oleksandrkybin25@gmail.com',
		password: '12345678',
		isAdmin: true,
	},
	isLoading: false,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(register.pending, state => {
			state.isLoading = true
		}),
			builder.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			}),
			builder.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			}),
			builder.addCase(login.pending, state => {
				state.isLoading = true
			}),
			builder.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			}),
			builder.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			}),
			builder.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			}),
			builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
	},
})

export default userSlice.reducer
