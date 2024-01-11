'use client'

import { useQuery } from '@tanstack/react-query'
import { errorCatch } from './../api/api.helper'
import { UserService } from './../services/user/user.service'

export const useProfile = () => {
	const { data } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
	})

	return {
		profile: data || {
			id: 1,
			email: 'oleksandrkybin25@gmail.com',
			name: 'Alexander',
			avatarPath: '',
			phone: '0963123141',
			isAdmin: true,
			favorites: [],
			orders: [],
		},
	}
}
