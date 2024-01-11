import { forwardRef } from 'react'
import cn from 'clsx'
import s from './Input.module.css'
import { IInput } from './input.interface'

const Field = forwardRef<HTMLInputElement, IInput>(
	({ Icon, placeholder, error, ...rest }, ref) => {
		return (
			<div className={s.container}>
				<label>
					<span className={s.placeholder}>
						{Icon && <Icon size={24} className={s.icon} />}
						{placeholder}
					</span>
					<input
						placeholder={placeholder}
						type='text'
						className={cn(s.input, {
							[s.bor_error]: !!error,
						})}
						ref={ref}
						{...rest}
					/>
				</label>
				{error && <div className={s.error}>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
