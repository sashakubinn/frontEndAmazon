import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { useProfile } from '@/hooks/useProfile'
import { UserService } from '@/services/user/user.service'
import { IProduct } from '@/types/product.interface'
import {
	InvalidateQueryFilters,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query'
import { FC } from 'react'
import { BsBalloonHeartFill } from 'react-icons/bs'
import { BsBalloonHeart } from 'react-icons/bs'
import s from './FavoriteButton.module.css'

const createDefaultProfile = () => ({
	id: 0,
	email: 'example@example.com',
	name: 'John Doe',
	avatarPath: '/default-avatar.jpg',
	phone: '123-456-7890',
	favorites: [],
	orders: [],
})

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()
	const profileData = profile || createDefaultProfile()

	const queryClient = useQueryClient()
	const { mutate } = useMutation({
		mutationKey: ['toggle favorites'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess() {
			queryClient.invalidateQueries(['get profile'] as InvalidateQueryFilters)
		},
	})

	const isExist = profileData.favorites.some(
		favorite => favorite.id === productId
	)
	return (
		<div>
			<button onClick={() => mutate()} className={s.color}>
				{isExist ? <BsBalloonHeartFill /> : <BsBalloonHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
