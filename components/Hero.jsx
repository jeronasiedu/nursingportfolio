import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { AnimateBg } from './index'
const Hero = () => {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      spacing="0"
      rounded="md"
      overflow="hidden"
      mb={2}
    >
      <VStack
        p={4}
        py={8}
        w="full"
        justifyContent="center"
        pos="relative"
        bg="brand"
        spacing={4}
        sx={{
          '@media (max-width:47em)': {
            bgGradient: 'linear(106deg,#00c5fbe6 0%,#005aead0 100%)',
          },
        }}
      >
        <Heading
          size="2xl"
          sx={{
            '@media (max-width:47em)': {
              color: '#fff',
            },
          }}
        >
          Be attentive to your health
        </Heading>
        <AnimateBg />
        <Text
          fontSize="xl"
          sx={{
            '@media (max-width:47em)': {
              color: 'gray.50',
            },
          }}
        >
          As a medical doctor, I&apos;ve know the face of adversity. I have seen
          much of death and dying, suffering and sorrow. I also remember the
          plight of patients at death beds. I just want you to work out, eat
          healthy,be patient. Believe me your body will reward you
        </Text>
        <Button
          alignSelf="flex-start"
          colorScheme="blue"
          rounded="sm"
          shadow="md"
          fontSize="lg"
        >
          Make Appointment
        </Button>
      </VStack>
      <Box
        pos="relative"
        w="full"
        h={['18rem', '20rem', 'auto']}
        display={['none', 'none', 'block']}
      >
        <Image
          src="/images/hero.jpg"
          layout="fill"
          alt="Hero section image"
          objectFit="cover"
        />
      </Box>
    </Stack>
  )
}

export default Hero
