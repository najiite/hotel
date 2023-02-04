import React from 'react'
import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Features from '@/components/features'
import Rooms from '@/components/rooms'
import Hospitality from '@/components/hospitality'
import Gallery from '@/components/gallery'
import Footer from '@/components/footer'
import Contact from '@/components/contact'
import Head from 'next/head'
import SiteDetails, { SiteDetailsProvider } from '@/scripts/siteDetails'
import { useContext } from 'react'

export default function Home() {
  const {siteName} = useContext(SiteDetails)
  return (
    <SiteDetailsProvider>
      <Head>
        <title>Hotel Landing Page</title>
        <meta name="description" content="Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-neutral-200'>

        <Navbar />
        <Hero />
        <Features />
        <Rooms />
        <Hospitality />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </SiteDetailsProvider>
  )
}
