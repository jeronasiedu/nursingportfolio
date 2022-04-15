import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import {
  Navbar,
  Hero,
  FindMe,
  About,
  Education,
  WorkExperience,
  Footer,
} from '../components'
import metaImage from '../assets/meta.png'
export default function Home() {
  return (
    <>
      <Head>
        <title>Nursing Portfolio with NextJS</title>
        <meta name="title" content="Nursing Portfolio with NextJS" />
        <meta
          name="description"
          content="You got to check this out. A well crafted portfolio for anyone in the health industry"
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://nursingportfolio.vercel.app/"
        />
        <meta property="og:title" content="Nursing Portfolio with NextJS" />
        <meta
          property="og:description"
          content="You got to check this out. A well crafted portfolio for anyone in the health industry"
        />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://nursingportfolio.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Nursing Portfolio with NextJS"
        />
        <meta
          property="twitter:description"
          content="You got to check this out. A well crafted portfolio for anyone in the health industry"
        />
        <meta property="twitter:image" content={metaImage} />
      </Head>
      <Navbar />
      <Container maxW="container.xl">
        <Hero />
        <FindMe />
        <About />
        <Education />
        <WorkExperience />
        <Footer />
      </Container>
    </>
  )
}
