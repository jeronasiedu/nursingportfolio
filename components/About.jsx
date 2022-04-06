import {
  Box,
  Center,
  Heading,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'

const About = () => {
  return (
    <Stack direction={['column', 'column', 'row']} mb={4} p={[3, 4, 10]}>
      <Center w="full">
        <Box
          pos="relative"
          w={260}
          h={290}
          sx={{
            '&::before': {
              content: "''",
              pos: 'absolute',
              bg: 'blue.500',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              transform: 'rotate(20deg)',
              rounded: 'lg',
            },
          }}
        >
          <Image
            src="/images/doctor3.jpg"
            alt="My picture"
            objectFit="cover"
            layout="fill"
            style={{
              borderRadius: '0.5rem',
            }}
          />
        </Box>
      </Center>
      <VStack w="full" alignItems="flex-start" p={[1, 2, 5]} fontSize="lg">
        <Heading>Dr Jane Doe</Heading>
        <Text color="blue.400">General Surgery</Text>
        <Text>MBBS | RMC, FCPS | Part II</Text>
        <Text>
          Dr Jane Doe graduated from medical college of under the university of
          Stanford in 2011. During internship period in Stanford college
          hospital, his special interest was in surgery. From that interest, Dr.
          Jane Doe complete part 1 in fellowship exam in surgery Specialty from
          the institute of Bangladesh college of physician and surgeon, dhaka in
          2014. In the residency training of this specialty, she is focusing on
          perioperative and chronic pain management. For this purpose...{' '}
          <Link color="blue.400" href="#">
            learn more
          </Link>
        </Text>
      </VStack>
    </Stack>
  )
}

export default About
