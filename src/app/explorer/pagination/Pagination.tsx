import Button from '@/components/ui/button/Button'
import { FC, useState, useEffect } from 'react'
import s from './Pagination.module.css'

interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: number | string
}

const Pagination: FC<IPagination> = ({
	changePage,
	numberPages,
	currentPage,
}) => {
	const [localCurrentPage, setLocalCurrentPage] = useState(currentPage)

	useEffect(() => {
		setLocalCurrentPage(currentPage)
	}, [currentPage])

	return (
		<div className={s.container}>
			{Array.from({ length: numberPages > 1 ? numberPages : 1 }).map(
				(_, index) => {
					const pageNumber = (index + 1).toString()
					const isCurrentPage = localCurrentPage === pageNumber
					const variant = isCurrentPage ? 'white' : 'orange'
					return (
						<Button
							key={pageNumber}
							onClick={() => {
								changePage(pageNumber)
								setLocalCurrentPage(pageNumber)
							}}
							variant={variant}
							size='big'
							disabled={currentPage === pageNumber}
						>
							{pageNumber}
						</Button>
					)
				}
			)}
		</div>
	)
}

export default Pagination
