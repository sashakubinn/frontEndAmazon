import { IProduct } from '@/types/product.interface'
import { formatToCurrency } from '@/utils/format-to-currency'
import { FaLock } from 'react-icons/fa'
import Link from 'next/link'
import AddToCartInline from './AddToCartInline'
import s from './ProductInformation.module.css'
import FavoriteButton from '@/components/ui/catalog/product-items/favorite-button/FavoriteButton'

interface IProductInformation {
	product: IProduct
}
export default function ProductInformation({ product }: IProductInformation) {
	return (
		<div className={s.wrapper}>
			<div className={s.price}>{formatToCurrency(product.price)}</div>
			<div className={s.mt}>
				$6.88 Shipping{' '}
				<Link href='/' className={s.details}>
					Details
				</Link>
			</div>
			<span className={s.sales}>Sales taxes may apple at checkout</span>
			<div className={s.delivery}>
				<span className={s.delivery_text}>Delivery</span>
				Thursday, June 10
			</div>
			<AddToCartInline product={product} />
			<p className={s.transaction}>
				<FaLock /> Secure transaction
			</p>
			<div className={s.fav_button}>
				<FavoriteButton productId={product.id} />
			</div>
		</div>
	)
}
