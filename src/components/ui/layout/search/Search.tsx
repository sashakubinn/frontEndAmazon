import { FC, useState } from 'react'
import s from './Search.module.css'
import { FcSearch } from 'react-icons/fc'
import { usePathname, useRouter } from 'next/navigation'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const { push } = useRouter()

	return (
		<div>
			<div
				className={s.search_bar}
				style={{
					gridTemplateColumns: '1fr 0.1fr',
				}}
			>
				<input
					className={s.input}
					type='text'
					placeholder='Search ...'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
				/>
				<button
					onClick={() => push(`/explorer?searchTerm=${searchTerm}`)}
					className={s.button}
				>
					<FcSearch />
				</button>
			</div>
		</div>
	)
}

export default Search
