import { Container } from '@chakra-ui/react'
import {
  Navbar,
  Hero,
  FindMe,
  About,
  Education,
  WorkExperience,
} from '../components'

export default function Home() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        <Hero />
        <FindMe />
        <About />
        <Education />
        <WorkExperience />
      </Container>
    </>
  )
}
