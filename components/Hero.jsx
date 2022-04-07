import { Box, Button, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

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
        bg="#F2F9FE"
        justifyContent="center"
        sx={{
          '@media (max-width:48em)': {
            bgImage: '/images/05.png',
            bgSize: 'cover',
          },
          '@media (max-width:30em)': {
            bgPos: '50% center',
          },
        }}
        spacing={4}
      >
        <Heading size="3xl">Be attentive to your health</Heading>
        <Text
          fontSize="xl"
          sx={{
            '@media (max-width:48em)': {
              fontWeight: '500',
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
