'use client'

import { useOutside } from '@/hooks/useOutside'
import { useProfile } from '@/hooks/useProfile'
import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import defaultUser from '../../../../../../public/images/default_user.jpg'
import s from './HeaderProfile.module.css'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, ref, setIsShow } = useOutside(false)
	return (
		<div className={s.mx} ref={ref}>
			{profile?.avatarPath ? (
				<div onClick={() => setIsShow(!isShow)}>
					<Image
						width={43}
						height={43}
						src={profile?.avatarPath}
						alt='Profile'
						className={s.profile}
					/>
				</div>
			) : (
				<div onClick={() => setIsShow(!isShow)}>
					<Image
						width={43}
						height={43}
						src={defaultUser}
						alt='Profile'
						className={s.profile}
					/>
				</div>
			)}
			<div
				className={cn([s.position], isShow ? [s.open_menu] : [s.close_menu])}
			>
				<div className={s.profile_name}> Name: {profile?.name} </div>
				<div className={s.profile_phone}> Phone: {profile?.phone} </div>
				<div className={s.profile_isAdmin}>
					Is Admin? :
					{profile?.isAdmin === true ? <span> Yes </span> : <span> No </span>}
				</div>
			</div>
		</div>
	)
}

export default HeaderProfile
