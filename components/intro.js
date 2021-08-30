import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

export default function Intro() {
	return (
		<section className="section">
			<div className="flex flex-row items-center section-intro">
				<Image
					src='/images/logo.png'
					alt='Cryptogamers'
					className='logo'
					layout="fixed"
					width='40'
					height='40'
				/>
				<h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 pl-4">
					CryptoGamers
				</h1>
			</div>
		
		</section>
	)
}
