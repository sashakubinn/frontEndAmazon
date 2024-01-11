import { IAuthResponse } from './../../store/user/user.interface'
import { ITokens } from '@/store/user/user.interface'
import Cookie from 'js-cookie'

export const getAccessToken = async () => {
	const accessToken = Cookie.get('accessToken')
	return accessToken || null
}

export const saveTokenStorage = (data: ITokens) => {
	Cookie.set('accessToken', data.accessToken)
	Cookie.set('refreshToken', data.refreshToken)
}

export const removeFromStorage = () => {
	Cookie.remove('accessToken')
	Cookie.remove('refreshToken')
	localStorage.removeItem('user')
}
export const saveToStorage = (data: IAuthResponse) => {
	saveToStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
