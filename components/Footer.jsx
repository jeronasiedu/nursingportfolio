import { Heading, HStack, IconButton, Spacer, Text } from '@chakra-ui/react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { FiFacebook } from 'react-icons/fi'

const Footer = () => {
  return (
    <HStack
      mb={5}
      p={3}
      sx={{
        shadow: '0 -2px 2px rgba(0, 0, 0, 0.02)',
      }}
      as="footer"
    >
      <Heading size="md">Copyright {new Date().getFullYear()} </Heading>
      <Spacer />
      <IconButton icon={<FiFacebook />} isRound colorScheme="blue" />
      <IconButton icon={<BsLinkedin />} isRound colorScheme="blue" />
      <IconButton icon={<BsTwitter />} isRound colorScheme="blue" />
    </HStack>
  )
}

export default Footer
