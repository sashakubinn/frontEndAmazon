import { ICategory } from './../../types/category.interface'
import { instance } from './../../api/api.interceptor'
import { IReview } from '@/types/review.interface'

interface IReviewLeave {
	rating: number
	text: string
}

const REVIEWS = 'reviews'

export const ReviewService = {
	async getAll() {
		return instance<IReview[]>({
			url: REVIEWS,
			method: 'GET',
		})
	},
	async getAverageByProduct(productId: string | number) {
		return instance<number>({
			url: `${REVIEWS}/average-by-product/${productId}`,
			method: 'GET',
		})
	},
	async leaveReview(productId: string | number, data: IReviewLeave) {
		return instance<IReview>({
			url: `${REVIEWS}/leave/${productId}`,
			method: 'POST',
			data,
		})
	},
}
