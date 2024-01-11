import type { FC, PropsWithChildren } from 'react'
import { useRef } from 'react'
import ReactDOM from 'react-dom'
import { RiCloseFill } from 'react-icons/ri'
import s from './Modal.module.css'

interface IModal {
	isOpen: boolean
	closeModal: () => void
}
const Modal: FC<PropsWithChildren<IModal>> = ({
	closeModal,
	isOpen,
	children,
}) => {
	const modalRef = useRef<HTMLElement | null>(document.getElementById('modal'))
	if (!isOpen || !modalRef.current) return null
	return ReactDOM.createPortal(
		<div className={s.overlay}>
			<div className={s.window}>
				<button className={s.button} onClick={() => closeModal()}>
					<RiCloseFill />
				</button>
				{children}
			</div>
		</div>,
		modalRef.current
	)
}

export default Modal
