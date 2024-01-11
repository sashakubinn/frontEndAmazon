import Image from 'next/image'
import { FC, useState } from 'react'
import cn from 'clsx'
import s from './Product.module.css'

interface IProductGallery {
	images: string[]
}

const ProductGallery: FC<IProductGallery> = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	return (
		<div>
			<Image
				src={images[activeIndex]}
				alt=''
				width={500}
				height={500}
				draggable={false}
				priority
				className={s.gallery}
			/>
			<div
				className={s.mt}
				style={{
					width: '500px',
					overflowX: 'auto',
					whiteSpace: 'nowrap',
				}}
			>
				{images.map((image, index) => (
					<button
						key={index}
						className={cn([s.gallery_image], {
							[s.active]: index === activeIndex,
							[s.non_active]: index !== activeIndex,
						})}
						onClick={() => setActiveIndex(index)}
					>
						<Image
							alt=''
							src={image}
							draggable={false}
							width={100}
							height={100}
							priority
						/>
					</button>
				))}
			</div>
		</div>
	)
}

export default ProductGallery
