import Heading from '@/components/ui/heading/Heading'
import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<Heading size='4xl'>
				<p>Could not find requested resource</p>
				<p>
					View <Link href='/explorer'> all products </Link>
				</p>
			</Heading>
		</>
	)
}
