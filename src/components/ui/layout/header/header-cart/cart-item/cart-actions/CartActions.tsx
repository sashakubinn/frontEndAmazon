import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICartItem } from '@/types/cart.interface'
import { FC } from 'react'
import { FiMinus } from 'react-icons/fi'
import { FiPlus } from 'react-icons/fi'
import { FiTrash } from 'react-icons/fi'
import s from './CartActions.module.css'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { changeQuantity, removeFromCart } = useActions()
	const { items } = useCart()
	const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity
	return (
		<div className={s.container}>
			<div className={s.position}>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus fontSize={13} />
				</button>
				<input disabled readOnly value={quantity} className={s.input} />
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'plus' })}
					disabled={quantity === 10}
				>
					<FiPlus fontSize={13} />
				</button>
				<button onClick={() => removeFromCart({ id: item.id })}>
					<FiTrash fontSize={13} />
				</button>
			</div>
		</div>
	)
}
export default CartActions
