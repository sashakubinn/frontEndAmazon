'use client'

import Button from '@/components/ui/button/Button'
import Heading from '@/components/ui/heading/Heading'
import Field from '@/components/ui/input/Input'
import { validEmail } from '@/components/ui/input/valid-email'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { IsEmailPassword } from '@/store/user/user.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { HiOutlineMail } from 'react-icons/hi'
import { RiLockPasswordLine } from 'react-icons/ri'
import s from './Auth.module.css'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

const Auth: FC = () => {
	const { isLoading } = useAuth()
	const { login, register } = useActions()
	const [type, setType] = useState<'login' | 'register'>('login')
	const {
		reset,
		handleSubmit,
		register: formRegister,
		formState: { errors },
	} = useForm<IsEmailPassword>({
		mode: 'onChange',
	})
	const onSubmit: SubmitHandler<IsEmailPassword> = data => {
		if (type === 'login') {
			login(data)
			console.log(data)
		} else {
			register(data)
		}
		reset()
	}
	return (
		<section className={s.section}>
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{type === 'login' ? (
					<Heading size='4xl' className={s.head}>
						Login
					</Heading>
				) : (
					<Heading size='4xl' className={s.head}>
						Register
					</Heading>
				)}
				<Field
					{...formRegister('email', {
						required: 'Email is required',
						pattern: {
							value: validEmail,
							message: 'Please enter valid email',
						},
					})}
					Icon={HiOutlineMail}
					placeholder='Email'
					error={errors.email?.message}
				/>
				<Field
					{...formRegister('password', {
						required: 'Password is required',
						minLength: {
							value: 6,
							message: 'Min length should more 6 symbols',
						},
					})}
					Icon={RiLockPasswordLine}
					placeholder='Password'
					error={errors.password?.message}
				/>
				<Button variant='orange'>Lets go</Button>
			</form>
		</section>
	)
}

export default Auth
