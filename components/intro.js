import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

export default function Intro() {
	return (
		<section className="section">
			{/* <div className="flex flex-row items-center section-intro"> */}
			<div className="grid grid-flow-col grid-cols-1 grid-rows-2 max-h-48">
				<div className="col-start-1 col-span-12 flex items-center justify-center">
					<Image
						src='/images/logo.png'
						alt='Cryptogamers'
						className='logo'
						layout="fixed"
						width='80'
						height='80'
					/>
				</div>

				<div className="col-start-1 col-end-12 flex items-center justify-center max-h-10">
					<h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8">
						CryptoGamers
					</h1>
				</div>
				
				
			</div>
		
		</section>
	)
}
