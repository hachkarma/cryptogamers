import Container from './container'
import Image from 'next/image'

import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center grid grid-cols-3 gap-8">

          <div className="col-span-4">
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

            <div className="col-start-1 col-end-12 flex items-center justify-center max-h-10 text-center mt-2">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 pl-4">
                CryptoGamers
              </h1>
            </div>
            <p className="text-left mt-5 text-lg">
                Comunidad de Juegos NFT - P2E. 
            </p>
          </div>

          <div className="col-span-4">
            {/* <h4 className="">
              Últimos posts
            </h4> */}

            {/* <div class="bg-gray-50 flex items-center justify-center px-16">
              <div class="relative w-full max-w-lg">
                <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
                <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"> s</div>
                <div class="m-8 relative space-y-4">
                  <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div class="flex-1 flex justify-between items-center">
                      <div class="w-52 rounded text-center text-xl">Activos únicos</div>
                      <div class="w-24 h-6 rounded-lg bg-purple-300 px-5 text-white">NFT</div>
                    </div>
                  </div>
                  <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div class="flex-1 flex justify-between items-center">
                      <div class="w-52 rounded text-center text-xl">Vicio</div>
                      <div class="w-24 h-6 rounded-lg bg-purple-300 px-5 text-white">Gaming</div>
                    </div>
                  </div>
                  <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
                    <div class="flex-1 flex justify-between items-center">
                      <div class="w-52 rounded text-center text-xl">Juega y gana</div>
                      <div class="w-24 h-6 rounded-lg bg-purple-300 px-5 text-white">P2E</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>



          <div className="col-span-4">
            <iframe src="https://discordapp.com/widget?id=866815045069045780&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
          </div>
				
          
          


        </div>
      </Container>
    </footer>
  )
}
