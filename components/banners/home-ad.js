import Link from 'next/link'

export default function HomeAd() {
    return (
      <section className="section mb-20 mt-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 shadow-lg p-5 flex flex-col items-center justify-center xl:p-10">
                <h2 className="font-sans xl:text-4xl text-xl font-extralight text-white">
                    Únete a nuestro discord
                </h2>   
                <Link href="https://discord.gg/Tsf3kAEG" >
                <a target="_blank" rel="noreferrer">
                    <button target="_blank" className="bg-green-400 active:bg-green-700 p-2 px-5 xl:px-10 xl:py-3 mt-5 text-white rounded xl:text-2xl font-extralight">Unirse</button>
                    </a>
                </Link> 
            </div>
      </section>
    )
  }
  