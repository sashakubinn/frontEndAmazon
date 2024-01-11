import Heading from '@/components/ui/heading/Heading'
import Modal from '@/components/ui/modal/Modal'
import { IReview } from '@/types/review.interface'
import { FC, useState } from 'react'
import LeaveReviewForm from './leave-review/LeaveReviewForm'
import s from './ProductReviews.module.css'
import ReviewItem from './review-item/ReviewItem'

interface IProductReview {
	reviews: IReview[]
	productId: number
}

const ProductReviews: FC<IProductReview> = ({ productId, reviews }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	if (!reviews.length) return null
	return (
		<section className={s.wrapper}>
			<div className={s.head}>
				<Heading size='3xl'> Reviews: </Heading>
				<button className={s.button} onClick={() => setIsModalOpen(true)}>
					Leave review
				</button>
			</div>
			<Modal closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
				<LeaveReviewForm productId={productId} />
			</Modal>
			<div className={s.position}>
				{reviews.map(review => (
					<ReviewItem key={review.id} review={review} />
				))}
			</div>
		</section>
	)
}

export default ProductReviews
