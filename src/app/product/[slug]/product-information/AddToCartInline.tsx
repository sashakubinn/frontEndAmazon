import Button from '@/components/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'

const AddToCartInline: FC<{ product: IProduct }> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()
	const currentItem = items.find(cartItem => cartItem.id === product.id)
	const onClickButton = () => {
		currentItem
			? removeFromCart({
					id: currentItem.id,
			  })
			: addToCart({
					product,
					price: product.price,
					quantity: 1,
			  })
	}
	return (
		<div>
			<Button variant='orange' onClick={onClickButton}>
				{currentItem ? 'Remove from Cart' : 'Add to Cart'}
			</Button>
		</div>
	)
}

export default AddToCartInline
