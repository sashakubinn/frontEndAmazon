import Button from '@/components/ui/button/Button'
import Heading from '@/components/ui/heading/Heading'
import { ReviewService } from '@/services/review/review.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'
import { IReviewFields } from '../review-item/review-fields.interface'
import s from './LeaveReview.module.css'

const LeaveReviewForm: FC<{ productId: number }> = ({ productId }) => {
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset,
		control,
	} = useForm<IReviewFields>({
		mode: 'onChange',
	})
	const queryClient = useQueryClient()
	const { mutate, isSuccess } = useMutation({
		mutationKey: ['leave review'],
		mutationFn: (data: IReviewFields) =>
			ReviewService.leaveReview(productId, data),
		onSuccess(data) {
			queryClient.refetchQueries({
				queryKey: ['get product', productId, data],
			})
		},
	})
	const onSubmit: SubmitHandler<IReviewFields> = data => {
		mutate(data)
		reset()
	}
	if (isSuccess) return <div> Review is successfully published </div>
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading size='3xl'> Leave a review </Heading>
				<div>
					<Controller
						name='rating'
						control={control}
						render={({ field: { onChange, value } }) => (
							<Rating
								onClick={onChange}
								initialValue={value}
								SVGstyle={{
									display: 'inline-block',
								}}
								size={20}
								transition
							/>
						)}
						rules={{
							required: 'Rating is required',
						}}
					/>
					<textarea
						{...formRegister('text', {
							required: 'Text is required',
						})}
						placeholder='Your text here ...'
						className={s.textarea}
					/>
					{Object.entries(errors) && (
						<ul className={s.error}>
							{Object.entries(errors).map(([_, error]) => (
								<li> {error?.message} </li>
							))}
						</ul>
					)}
					<div className={s.button}>
						<Button type='submit' variant='orange'>
							Leave
						</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default LeaveReviewForm
