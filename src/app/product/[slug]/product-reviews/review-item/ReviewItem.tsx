import { IReview } from '@/types/review.interface'
import Image from 'next/image'
import { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import s from './ReviewItem.module.css'

const ReviewItem: FC<{ review: IReview }> = ({ review }) => {
	return (
		<div className={s.wrapper}>
			<div className={s.position}>
				<Image
					alt={review.user.name}
					src={review.user.avatarPath}
					width={40}
					height={40}
					className={s.image}
				/>
				<span> {review.user.name} </span>
			</div>
			<Rating
				readonly
				initialValue={Number(review.rating)}
				SVGstyle={{
					display: 'inline-block',
				}}
				size={20}
				allowFraction
				transition
			/>
			<div className={s.text}>{review.text}</div>
		</div>
	)
}

export default ReviewItem
