import { instance } from './../../api/api.interceptor'
import { IFullUser, IUser } from './../../types/user.interface'

interface TypeData {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

const USERS = 'users'

export const UserService = {
	async getProfile() {
		return instance<IFullUser>({
			url: `${USERS}/profile`,
			method: 'GET',
		})
	},
	async updateProfile(data: TypeData) {
		return instance<IUser>({
			url: `${USERS}/update-profile`,
			method: 'PUT',
			data,
		})
	},
	async toggleFavorite(productId: string | number) {
		return instance<IUser>({
			url: `${USERS}/profile/favorites/${productId}`,
			method: 'PATCH',
		})
	},
}
