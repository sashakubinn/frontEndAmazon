import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import { PiShoppingCartSimple } from 'react-icons/pi'
import s from './AddToCart.module.css'

const AddToCart: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const currentItem = items.find(cartItem => cartItem.product.id === product.id)

	const onCartClick = () => {
		currentItem
			? removeFromCart({ id: currentItem.id })
			: addToCart({ product, price: product.price, quantity: 1 })
	}

	return (
		<div>
			<button className={s.color} onClick={onCartClick}>
				{currentItem ? <PiShoppingCartSimpleFill /> : <PiShoppingCartSimple />}
			</button>
		</div>
	)
}

export default AddToCart
