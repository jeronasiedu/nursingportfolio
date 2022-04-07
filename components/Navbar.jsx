import { Heading, HStack, Spacer, Text, chakra, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <HStack w="full" px={6} py={4} mb="2" shadow="sm">
      <Heading size="lg" textTransform="uppercase">
        Take
        <chakra.span
          bgClip="text"
          bgGradient="linear(106deg,#00c6fb 0%,#005bea 100%)"
        >
          Care
        </chakra.span>
      </Heading>
      <Spacer />
      <Button rounded="sm" colorScheme="blue">
        Contact Me
      </Button>
    </HStack>
  )
}
export default Navbar
