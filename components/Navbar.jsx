import { Heading, HStack, Spacer, Text, chakra, Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <HStack w="full" px={6} py={4} mb="2" shadow="sm">
      <Heading size="md">
        Take<chakra.span fontWeight="light">Care</chakra.span>
      </Heading>
      <Spacer />
      <Button rounded="sm" colorScheme="blue">
        Contact Me
      </Button>
    </HStack>
  )
}
export default Navbar
