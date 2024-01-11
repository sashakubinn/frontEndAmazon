import Catalog from '@/components/ui/catalog/Catalog'
import { CategoryService } from '@/services/category/category.service'
import { ProductService } from '@/services/product/product.service'
import { IPage, TypeParamsSlug } from '@/types/page-params'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
	const categories = await CategoryService.getAll()
	const paths = categories.data.map(category => {
		return {
			params: { slug: category.slug.toLowerCase() },
		}
	})
	return paths
}

async function getProducts(params: TypeParamsSlug) {
	try {
		const { data: products } = await ProductService.getByCategory(
			params?.slug as string
		)
		const { data: category } = await CategoryService.getBySlug(
			params?.slug as string
		)
		return { category, products }
	} catch (error) {
		console.error('Error in getProducts:', error)
		throw error
	}
}

export async function generateMetadata({ params }: IPage): Promise<Metadata> {
	const { category, products } = await getProducts(params)
	return {
		title: category.name,
		description: `Random description about ${category.name}`,
		openGraph: {
			images: products[0].images,
			description: `Random description about ${category.name}`,
		},
	}
}

export default async function CategoryPage({ params }: IPage) {
	const data = await getProducts(params)

	return (
		<>
			<Catalog products={data.products} title={data.category.name} />
		</>
	)
}
