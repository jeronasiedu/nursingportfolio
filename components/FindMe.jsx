import { HStack, IconButton, Text } from '@chakra-ui/react'
import { FiFacebook } from 'react-icons/fi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
const FindMe = () => {
  return (
    <HStack mb={[10, 5, 3]} spacing={3}>
      <Text fontSize="xl">Find me</Text>
      <IconButton icon={<FiFacebook />} isRound colorScheme="blue" />
      <IconButton icon={<BsLinkedin />} isRound colorScheme="blue" />
      <IconButton icon={<BsTwitter />} isRound colorScheme="blue" />
    </HStack>
  )
}

export default FindMe
