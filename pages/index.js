import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Features from '@/components/features'
import Rooms from '@/components/rooms'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hotel Landing Page</title>
        <meta name="description" content="Hotel Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-neutral-200'>

        <Navbar />
        <Hero />
        <Features />
        <Rooms />
      </div>
    </>
  )
}
