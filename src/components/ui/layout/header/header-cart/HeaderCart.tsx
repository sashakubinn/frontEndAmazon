'use client'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'
import { FC } from 'react'
import s from './HeaderCart.module.css'
import SquareButton from './square-button/SquareButton'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import cn from 'clsx'
import { formatToCurrency } from '@/utils/format-to-currency'
import CartItem from './cart-item/CartItem'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Cart: FC = () => {
	const { isShow, ref, setIsShow } = useOutside(false)
	const { items, total } = useCart()

	return (
		<div className={s.container} ref={ref}>
			<SquareButton
				Icon={PiShoppingCartSimpleFill}
				length={items.length}
				onClick={() => setIsShow(!isShow)}
			/>
			<div
				className={cn([s.position], isShow ? [s.open_menu] : [s.close_menu])}
			>
				<div>
					{items.length ? (
						items.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className={s.empty}> Cart is empty! </div>
					)}
				</div>
				<div className={s.total}>
					<div>Total: </div>
					<div>{formatToCurrency(total)}</div>
				</div>
				{!!items.length && (
					<div className={s.checkout}>
						<Link href='/checkout'>
							<Button variant='white'>Go to checkout</Button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default Cart
