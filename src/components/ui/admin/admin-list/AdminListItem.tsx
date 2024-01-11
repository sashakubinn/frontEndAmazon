import { FC } from 'react'
import AdminActions from './admin-actions/AdminActions'
import { IAdminListItem } from './admin-list.interface'
import s from './AdminList.module.css'

const AdminListItem: FC<IAdminListItem> = ({ removeHandler, listItem }) => {
	return (
		<div className={s.item}>
			{listItem.items.map(value => (
				<div className={s.value} key={value}>
					{value}
				</div>
			))}
			<AdminActions
				editUrl={listItem.editUrl}
				viewUrl={listItem.viewUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}

export default AdminListItem
