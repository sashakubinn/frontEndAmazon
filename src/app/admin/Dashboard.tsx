'use client'
import Heading from '@/components/ui/heading/Heading'
import { StatisticsService } from '@/services/statistics/statistics.service'
import { formatToCurrency } from '@/utils/format-to-currency'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'
import s from './Dashboard.module.css'

const Dashboard: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['statistics'],
		queryFn: () => StatisticsService.getMain(),
		select: ({ data }) => data,
	})
	console.log(data)

	return (
		<>
			<Heading size='2xl'>Dashboard</Heading>
			{data?.length ? (
				<div className={s.wrapper}>
					{data.map((item, index) => (
						<div key={item.name} className={s.item}>
							<div>{item.name}</div>
							<div>
								{index === data.length - 1
									? formatToCurrency(item.value || 0)
									: item.value}
							</div>
						</div>
					))}
				</div>
			) : (
				<p>Statistics not found</p>
			)}
		</>
	)
}
export default Dashboard
