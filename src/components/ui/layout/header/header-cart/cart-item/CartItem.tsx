import { ICartItem } from '@/types/cart.interface'
import { formatToCurrency } from '@/utils/format-to-currency'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'
import CartActions from './cart-actions/CartActions'
import s from './CartItem.module.css'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={s.item}>
			<Image
				alt={item.product.name}
				src={item.product.images[0]}
				width={100}
				height={100}
			/>
			<div className={s.price}>
				<div> {item.product.name}</div>
				<div className={s.top}>{formatToCurrency(item.product.price)}</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
