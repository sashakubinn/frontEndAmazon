import Carousel from '@/components/ui/carousel/Carousel'
import Catalog from '@/components/ui/catalog/Catalog'
import CatalogPagination from '@/components/ui/catalog/CatalogPagination'
import { TypeProductPagination } from '@/types/product.interface'
import { FC } from 'react'
import { carouselItems } from './carousel.data'

const Home: FC<TypeProductPagination> = ({ products, length }) => {
	return (
		<>
			<Carousel items={carouselItems} />
			<CatalogPagination
				data={{ products, length }}
				title={'Freshed Products'}
			/>
		</>
	)
}

export default Home
