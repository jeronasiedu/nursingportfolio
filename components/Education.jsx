import { Box, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'

const Education = () => {
  return (
    <VStack bg="brand" px={8} py={6} mb={4} w="full" rounded="md" spacing={5}>
      <Heading textAlign="center">Education & Research</Heading>
      <SimpleGrid
        spacing={3}
        w="full"
        fontSize="lg"
        fontWeight="bold"
        rowGap="7"
        columns={[1, 1, 3]}
      >
        <Box
          p={4}
          bg="white"
          mx="auto"
          w="full"
          maxW="30rem"
          pos="relative"
          rounded="sm"
          sx={{
            '&::before': {
              content: "''",
              pos: 'absolute',
              top: 0,
              left: 0,
              w: 'full',
              bg: '#F04F77',
              h: '0.4rem',
              roundedTop: 'sm',
            },
            '&::after': {
              content: "'2 years'",
              pos: 'absolute',
              top: 0,
              right: '0.5rem',
              transform: 'translateY(-50%)',
              border: '3px solid #F04F77',
              rounded: '0.3rem',
              p: '0.1rem',
              color: '#F04F77',
              bg: '#fff',
            },
          }}
        >
          <Text>Fellow of college of physicians and Surgeons (part1)</Text>
        </Box>
        <Box
          p={4}
          bg="white"
          w="full"
          mx="auto"
          maxW="30rem"
          pos="relative"
          rounded="sm"
          sx={{
            '&::before': {
              content: "''",
              pos: 'absolute',
              top: 0,
              left: 0,
              w: 'full',
              bg: '#FB7E41',
              h: '0.4rem',
              roundedTop: 'sm',
            },
            '&::after': {
              content: "'5 years'",
              pos: 'absolute',
              top: 0,
              right: '0.5rem',
              transform: 'translateY(-50%)',
              border: '3px solid #FB7E41',
              rounded: '0.3rem',
              p: '0.1rem',
              color: '#FB7E41',
              bg: '#fff',
            },
          }}
        >
          <Text>Training on Anesthesia and pain management</Text>
        </Box>
        <Box
          p={4}
          bg="white"
          w="full"
          mx="auto"
          maxW="30rem"
          pos="relative"
          rounded="sm"
          sx={{
            '&::before': {
              content: "''",
              pos: 'absolute',
              top: 0,
              left: 0,
              w: 'full',
              bg: '#F9CC5A',
              h: '0.4rem',
              roundedTop: 'sm',
            },
            '&::after': {
              content: "'3 years'",
              pos: 'absolute',
              top: 0,
              right: '0.5rem',
              transform: 'translateY(-50%)',
              border: '3px solid #F9CC5A',
              rounded: '0.3rem',
              p: '0.1rem',
              color: '#F9CC5A',
              bg: '#fff',
            },
          }}
        >
          <Text>Training on General Surgery</Text>
        </Box>
      </SimpleGrid>
    </VStack>
  )
}

export default Education
