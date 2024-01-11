import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import { BsCaretLeftSquare, BsCaretRightSquare } from 'react-icons/bs'
import s from './Carousel.module.scss'

const CarouselNavigation: FC = () => {
	const { nextSlide, prevSlide } = useActions()
	return (
		<div>
			<div className={s.nav}>
				<button onClick={() => prevSlide()} className={s.mr}>
					<BsCaretLeftSquare />
				</button>
			</div>
			<div className={s.nav}>
				<button onClick={() => nextSlide({ carouselLength: 2 })}>
					<BsCaretRightSquare />
				</button>
			</div>
		</div>
	)
}

export default CarouselNavigation
