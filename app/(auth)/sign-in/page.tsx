import SignIn from '@/components/sign-in'
import { getAuthSession } from '@/lib/nextAuth'
import { FC } from 'react'


const page: FC = async () => {
	const session = await getAuthSession()
	return (
		<div className='absolut inset-0'>
			<div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center mt-20'>
				<SignIn />
			</div>
		</div>
	)
}

export default page
