import { Box, Flex, Text, Image, Button } from '@chakra-ui/react'
import Image1 from '../assets/img1.png'
import Image2 from '../assets/img2.png'
import Image3 from '../assets/img3.png'
import gradientImage1 from '../assets/gradient1.png'
import gradientImage2 from '../assets/gradient2.png'

const Hero = () => {
  return (
    <>
      <Box
        pt={8}
        position='relative'
      >
        <Box
          as='img'
          src={gradientImage1}
          position='absolute'
          top={-30}
          h='816px'
          w={{ base: 300, md: 'auto' }}
          right={0}
          zIndex={0}
          filter={'blur(200px)'}
          opacity={0.4}
        />

        <Flex
          align='center'
          justify='space-between'
          direction={{ base: 'column', md: 'row' }}
          padding='4'
          zIndex={1}
          position='relative'
          height='full'
          gap={{ base: 10, lg: 20 }}
        >
          <Box
            width={{ base: '100%', md: '45%', lg: '35%' }}
            height='full'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            // alignItems='center'
            gap={3}
          >
            <Text
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight='500'
              lineHeight={{ base: '46px', lg: '76px' }}
              fontStyle='normal'
              color='white'
              maxW={{ base: 'full', lg: '400px' }}
            >
              Schedule, <br /> Make Payments, & Send invoice to your customers.
            </Text>
            <Text fontSize='md' fontWeight='400' color='#fff'>
              Efficiently and professionally run your business and with your
              clients eliminating the complaints of your customers so you can go
              back to work.
            </Text>
            <Button variant='secondary' maxW='209px'>
              Get started now
            </Button>
          </Box>

          <Box
            width={{ base: '100%', md: '60%' }}
            position='relative'
            height='full'
            display={{ base: 'block', md: 'flex' }}
            alignItems='center'
            justifyContent='center'
          >
            <Image
              src={Image1}
              alt='Sample'
              borderRadius='md'
              width='100%'
              height='auto'
              boxShadow='none'
            />
          </Box>
        </Flex>
      </Box>

      <Box pt={{ base: 16, md: 32 }} position='relative'>
        <Box
          as='img'
          src={gradientImage2}
          position='absolute'
          h='688px'
          w={{ base: 300, md: 'auto' }}
          top={50}
          left={0}
          zIndex={0}
          filter={'blur(200px)'}
          opacity={0.4}
        />

        <Flex
          align='center'
          justify='center'
          direction={{ base: 'column-reverse', md: 'row' }}
          gap={{ base: 10, lg: 20 }}
          zIndex={1}
          position='relative'
          height='full'
        >
          <Box
            width={{ base: '100%', md: '55%' }}
            position='relative'
            height='full'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Image
              src={Image2}
              alt='Image2'
              borderRadius='md'
              width='100%'
              height='auto'
              boxShadow='none'
              objectFit='contain'
            />
          </Box>

          <Box
            width={{ base: '100%', md: '35%' }}
            height='full'
            display='flex'
            flexDirection='column'
            textAlign={{ base: 'center', lg: 'end' }}
            gap={5}
          >
            <Text
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight='500'
              lineHeight={{ base: '46px', lg: '76px' }}
              fontStyle='normal'
              color='white'
              maxW={{ base: 'full', lg: '448px' }}
            >
              Let your customers know what time is available in a day!
            </Text>
            <Box>
              <Button variant='secondary' maxW='199px'>
                Setup now
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      <Box pt={{ base: 16, md: 32 }} position='relative'>
        <Box
          as='img'
          src={gradientImage1}
          position='absolute'
          h={616}
          // w={716}
          right={0}
          zIndex={0}
          filter={'blur(200px)'}
          opacity={0.4}
        />

        <Flex
          align='center'
          justify='space-between'
          direction={{ base: 'column', md: 'row' }}
          padding='4'
          zIndex={1}
          position='relative'
          height='full'
          gap={{ base: 10, lg: 20 }}
        >
          <Box
            width={{ base: '100%', md: '35%' }}
            height='full'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            // alignItems='center'
            gap={3}
          >
            <Text
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight='500'
              lineHeight={{ base: '46px', lg: '76px' }}
              fontStyle='normal'
              color='white'
              maxW={{ base: 'full', lg: '400px' }}
            >
              Send reminders, SMS and invoices to customers.
            </Text>
            <Button variant='secondary' maxW='189px'>
              Setup now
            </Button>
          </Box>

          <Box
            width={{ base: '100%', md: '60%' }}
            position='relative'
            height='full'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Image
              src={Image3}
              alt='Image3'
              borderRadius='md'
              width='100%'
              height='auto'
              boxShadow='none'
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Hero
