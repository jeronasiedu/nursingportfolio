import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

const WorkExperience = () => {
  return (
    <VStack w="full" mb={5} spacing={5}>
      <Heading>Work Experience</Heading>
      <HStack w="full">
        <VStack w="full" spacing="5rem">
          <VStack
            pos="relative"
            bg="#fff"
            w="full"
            p={4}
            rounded="sm"
            shadow="md"
            sx={{
              '&::before': {
                pos: 'absolute',
                content: "''",
                inset: 0,
                bg: '#b9cfe1',
                transform: 'rotate(10deg)',
                zIndex: -3,
                rounded: 'sm',
              },
            }}
            alignItems="flex-start"
          >
            <Heading size="md" fontWeight="bold">
              Cerogac Medical College Hospital
            </Heading>
            <Text fontSize="lg" color="blue.400">
              Head of Surgery and Reproductive Medicine
            </Text>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              nemo dolor dolores sunt assumenda consequatur, sint fuga hic iure
              commodi qui iusto quae cupiditate! Perspiciatis quos natus error
            </Text>
          </VStack>
          <VStack
            pos="relative"
            bg="#fff"
            w="full"
            p={4}
            rounded="sm"
            shadow="md"
            sx={{
              '&::before': {
                pos: 'absolute',
                content: "''",
                inset: 0,
                bg: '#b9cfe1',
                transform: 'rotate(10deg)',
                zIndex: -3,
                rounded: 'sm',
              },
            }}
            alignItems="flex-start"
          >
            <Heading size="md" fontWeight="bold">
              Cerogac Medical College Hospital
            </Heading>
            <Text fontSize="lg" color="blue.400">
              Head of Surgery and Reproductive Medicine
            </Text>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Pariatur, natus. Aperiam harum molestias magni officia ut. Cumque
              quis accusantium consectetur placeat dolores nam vero
            </Text>
          </VStack>
          <VStack
            pos="relative"
            bg="#fff"
            w="full"
            p={4}
            rounded="sm"
            shadow="md"
            sx={{
              '&::before': {
                pos: 'absolute',
                content: "''",
                inset: 0,
                bg: '#b9cfe1',
                transform: 'rotate(10deg)',
                zIndex: -3,
                rounded: 'sm',
              },
            }}
            alignItems="flex-start"
          >
            <Heading size="md" fontWeight="bold">
              Cerogac Medical College Hospital
            </Heading>
            <Text fontSize="lg" color="blue.400">
              Head of Surgery and Reproductive Medicine
            </Text>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              dolorum id, officia expedita dolor voluptates?
            </Text>
          </VStack>
        </VStack>
        <Box
          display={['none', 'none', 'inline-flex']}
          w="full"
          pos="relative"
          h="50rem"
        >
          <Image
            src="/images/experience.svg"
            alt="work experience illustration"
            layout="fill"
          />
        </Box>
      </HStack>
    </VStack>
  )
}

export default WorkExperience
