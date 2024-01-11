import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { RiDeleteRow, RiEdit2Line, RiExternalLinkLine } from 'react-icons/ri'
import { IListItem } from '../admin-list.interface'
import s from './AdminActions.module.css'

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
	removeHandler?: () => void
}

const AdminActions: FC<IAdminActions> = ({
	editUrl,
	removeHandler,
	viewUrl,
}) => {
	const { push } = useRouter()
	return (
		<div className={s.actions}>
			{viewUrl && (
				<button className={s.butt} onClick={() => push(viewUrl)}>
					<RiExternalLinkLine />
				</button>
			)}
			{editUrl && (
				<button className={s.butt} onClick={() => push(editUrl)}>
					<RiEdit2Line />
				</button>
			)}
			{removeHandler && (
				<button onClick={removeHandler}>
					<RiDeleteRow />
				</button>
			)}
		</div>
	)
}

export default AdminActions
