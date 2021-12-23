import '@styles/global.css'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { AnimatePresence } from 'framer-motion'
// import Head from '@components/Head'
import { FontSizes } from '@styles/font-sizes.js'
// import { NextSeo } from 'next-seo'
import { DefaultSeo } from 'next-seo'

// import your default seo configuration
import SEO from '../next-seo.config.js'

function Application({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <FontSizes />
      <Header>Page Header Area</Header>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer>Page Footer Area</Footer>
    </>
  )
}

export default Application
