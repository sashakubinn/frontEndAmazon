import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { OrderService } from '@/services/order/order.service'
import { formatDate } from '@/utils/format-date'
import { formatToCurrency } from '@/utils/format-to-currency'
import { useQuery } from '@tanstack/react-query'

export const useAdminOrders = () => {
	const { data } = useQuery({
		queryKey: ['get admin orders'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }) =>
			data.map((order): IListItem => {
				return {
					id: order.id,
					viewUrl: `/order/${order.status}`,
					editUrl: getAdminUrl(`/order/edit/${order.id}`),
					items: [
						`# ${order.id}`,
						order.status,
						formatDate(order.createdAt),
						formatToCurrency(order.total),
					],
				}
			}),
	})
	return {
		data,
	}
}
