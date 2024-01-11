'use client'

import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

export default function Providers({ children }: PropsWithChildren<unknown>) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				{/*  @ts-ignore  */}
				<PersistGate loading={null} persistor={persistor}>
					{children}
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
