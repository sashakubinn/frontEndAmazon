import { IListItem } from '@/components/ui/admin/admin-list/admin-list.interface'
import { getAdminUrl } from '@/config/url.config'
import { CategoryService } from '@/services/category/category.service'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useAdminCategories = () => {
	const { data, refetch } = useQuery({
		queryKey: ['get admin categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) =>
			data.map((category): IListItem => {
				return {
					id: category.id,
					viewUrl: `/category/${category.slug}`,
					editUrl: getAdminUrl(`/category/edit/${category.id}`),
					items: [category.name, category.slug],
				}
			}),
	})
	const { mutate } = useMutation({
		mutationKey: ['delete categories'],
		mutationFn: (id: number) => CategoryService.delete(id),
		onSuccess() {
			refetch()
		},
	})
	return {
		data,
		mutate,
	}
}
