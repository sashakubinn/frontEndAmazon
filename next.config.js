/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL,
	},
	images: {
		domains: ['loremflickr.com', 'www.aptronixdia.com', 'cloudflare-ipfs.com'],
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:paths*',
				destination: 'http://localhost:4200/uploads/:paths*',
			},
		]
	},
}

module.exports = nextConfig
