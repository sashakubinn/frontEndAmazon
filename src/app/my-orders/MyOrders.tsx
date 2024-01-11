'use client'

import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import { OrderService } from '@/services/order/order.service'
import { IOrder } from '@/types/order.interface'
import { formatToCurrency } from '@/utils/format-to-currency'
import { useQuery } from '@tanstack/react-query'
import s from './MyOrders.module.css'

export default function MyOrders() {
	const { data: orders } = useQuery({
		queryKey: ['my-orders'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }) => data,
	})
	return (
		<>
			<Heading size='4xl'> My orders </Heading>
			<section>
				{orders?.length ? (
					orders.map(order => (
						<div key={order.id} className={s.order}>
							<span> {order.id} </span>
							<span> {order.status} </span>
							<span>
								{new Date(order.createdAt).toLocaleDateString('uk-Ua')}
							</span>
							<span> {formatToCurrency(order.total)} </span>
						</div>
					))
				) : (
					<div>Orders Not Found!</div>
				)}
			</section>
		</>
	)
}
