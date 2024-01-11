import { FC, PropsWithChildren } from 'react'
import { IconType } from 'react-icons'
import { PiShoppingCartSimpleFill } from 'react-icons/pi'
import s from './SquareButton.module.css'

interface ISquareButton {
	length: number
	Icon: IconType
	onClick?: () => void
}

const SquareButton: FC<ISquareButton> = ({ Icon, length, onClick }) => {
	return (
		<button onClick={onClick} className={s.button}>
			{!!length && <span className={s.length}>{length}</span>}
			<Icon className={s.icon} size={21} />
		</button>
	)
}
export default SquareButton
