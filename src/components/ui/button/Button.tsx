import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import s from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
	onClickButton?: () => void
	size?: 'small' | 'big'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant = 'orange',
	onClickButton,
	size = 'big',
	...rest
}) => {
	return (
		<button
			onClick={onClickButton}
			{...rest}
			className={cn(
				s.default,
				{
					[s.button_orange]: variant === 'orange',
					[s.button_white]: variant === 'white',
					[s.small]: size === 'small',
				},
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
