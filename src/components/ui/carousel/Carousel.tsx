'use client'

import { useTypedSelector } from '@/hooks/useTypedSelector'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { TransitionGroup } from 'react-transition-group'
import Button from '../button/Button'
import { ICarouselItem } from './carousel.interface'
import s from './Carousel.module.scss'
import CarouselNavigation from './CarouselNavigation'
import CSSTransition from './css-transition/CSSTransitionGroup'

interface ICarousel {
	items: ICarouselItem[]
	className?: string
}

const Carousel: FC<ICarousel> = ({ items, className = '' }) => {
	const { selectedItemIndex } = useTypedSelector(state => state.carousel)
	const selectedItem = items[selectedItemIndex]
	return (
		<section className={cn(className, [s.container])}>
			<CarouselNavigation />
			<TransitionGroup className={s.transition}>
				<CSSTransition
					key={selectedItem.title}
					timeout={500}
					classNames={{
						enter: s['item-enter'],
						enterActive: s['item-enter-active'],
						exit: s['item-exit'],
						exitActive: s['item-exit-active'],
					}}
					unmountOnExit
					mountOnEnter
				>
					<div
						className={s.item}
						style={
							selectedItem.image
								? {
										backgroundImage: `url(${selectedItem.image})`,
								  }
								: {}
						}
					>
						<h2> {selectedItem.title} </h2>
						<p> {selectedItem.description} </p>
						{selectedItem.link ? (
							<Link href={selectedItem.link}>
								<Button variant='white'>Read more</Button>
							</Link>
						) : (
							<Link href='/explorer'>
								<Button variant='white'>Browse products</Button>
							</Link>
						)}
					</div>
				</CSSTransition>
			</TransitionGroup>
		</section>
	)
}

export default Carousel
