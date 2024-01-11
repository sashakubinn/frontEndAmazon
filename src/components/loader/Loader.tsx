import { FC } from 'react'
import s from './Loader.module.css'

const Loader: FC = () => {
	return (
		<div className={s.pl}>
			<div className={s.pl_outer_ring}></div>
			<div className={s.pl__inner_ring}></div>
			<div className={s.pl__track_cover}></div>
			<div className={s.pl__ball}>
				<div className={s.pl__ball_texture}></div>
				<div className={s.pl__ball_outer_shadow}></div>
				<div className={s.pl__ball_inner_shadow}></div>
				<div className={s.pl__ball_side_shadows}></div>
			</div>
		</div>
	)
}

export default Loader
