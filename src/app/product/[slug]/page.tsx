import { ProductService } from '@/services/product/product.service'
import { IPage, TypeParamsSlug } from '@/types/page-params'
import type { Metadata } from 'next'
import Product from './Product'

export const revalidate = 60

export async function generateStaticParams() {
	const response = await ProductService.getAll()
	const paths = response.products.map(product => {
		return {
			params: { slug: product.slug },
		}
	})
	return paths
}

async function getProducts(params: TypeParamsSlug) {
	const product = await ProductService.getBySlug(params?.slug as string)
	const { data: similarProducts } = await ProductService.getSimilar(product.id)
	return { product, similarProducts }
}

export async function generateMetadata({ params }: IPage): Promise<Metadata> {
	const { product } = await getProducts(params)
	return {
		title: product.name,
		description: product.description,
		category: product.category.name,
		openGraph: {
			images: product?.images || [],
			description: product.description,
		},
	}
}

export default async function ProductPage({ params }: IPage) {
	const { product, similarProducts } = await getProducts(params)
	return (
		<Product
			initialProduct={product}
			similarProducts={similarProducts}
			slug={params.slug}
		/>
	)
}
