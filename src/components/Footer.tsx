import {
  Flex,
  Box,
  Image,
  Button,
  Heading,
  Divider,
  Grid,
  GridItem,
  Input,
  Center,
  Text,
  Link,
  Stack,
} from '@chakra-ui/react'
import logo from '../assets/Mechdly logo 2.png'
import facebook from '../assets/fi_facebook.png'
import linkedIn from '../assets/fi_linkedin.png'
import twitter from '../assets/fi_twitter.png'
import instagram from '../assets/fi_instagram.png'

const Footer = () => {
  return (
    <>
      <Box
        pt={100}
        display='flex'
        flexDirection='column'
        gap={8}
        fontFamily={'Satoshi'}
      >
        <Flex
          alignItems='center'
          direction={{ base: 'column', lg: 'row' }}
          justifyContent='space-between'
          gap={8}
        >
          <Image src={logo} width={180} />
          <Flex gap={8} alignItems='center'>
            <Text
              fontWeight={400}
              color='white'
              fontSize={{
                base: '2xl',
                md: '30px',
              }}
            >
              Ready for your setup?
            </Text>
            <Button variant='secondary' mr={3}>
              Get started
            </Button>
          </Flex>
        </Flex>

        <Divider my={10} border='2px solid' borderColor='primary.500' />

        <Grid templateColumns='repeat(auto-fit, minmax(200px, 1fr))' gap={10}>
          <GridItem color='white' p='4' colSpan={2}>
            <Box
              display='flex'
              flexDir='column'
              justifyContent='center'
              maxW={{
                base: '90%',
                md: '500px',
              }}
              mx={{ base: 'auto', lg: 0 }}
            >
              <Heading
                fontSize={{
                  base: '4xl',
                  lg: '56px',
                }}
                w={{
                  base: '90%',
                  lg: '406px',
                }}
                fontWeight={700}
              >
                Subscribe to our newsletter!
              </Heading>
              <Box
                mt={10}
                pos='relative'
                display='flex'
                flexDirection='column'
                gap={4}
              >
                <Input
                  pos='relative'
                  placeholder='Email address'
                  _focus={{ border: '1px solid #fff' }}
                  _placeholder={{ color: 'white' }}
                  sx={{
                    borderRadius: '40px',
                    padding: '27px 24px ',
                    background: 'gradient.100',
                    backdropFilter: 'blur(21px)',

                    fontWeight: '500',
                    fontSize: 'md',
                    lineHeight: '27px',
                  }}
                />
                <Button
                  variant={'secondary'}
                  top='1px'
                  right={0}
                  zIndex={1}
                  pos={{
                    base: 'static',
                    lg: 'absolute',
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </GridItem>
          <GridItem colSpan={2} color={'white'}>
            <Flex
              direction={['column', 'row']}
              justifyContent={['center', 'space-around']}
              alignItems={['center', 'start']}
              gap={4}
              // wrap='wrap'
            >
              <Center w={['60%', 200]} mb={[4, 4, 0]}>
                <Stack spacing={1} textAlign='center'>
                  <Text fontSize='25px' fontWeight='400'>
                    Company
                  </Text>
                  <Stack spacing={0} fontSize='sm'>
                    <Link href='#about' color='white'>
                      About Us
                    </Link>
                    <Link href='#partners' color='white'>
                      Partners & Affiliates
                    </Link>
                  </Stack>
                </Stack>
              </Center>

              <Center w={['60%', 200]} mb={[4, 4, 0]}>
                <Stack spacing={1} textAlign='center'>
                  <Text fontSize='25px' fontWeight='400'>
                    Products
                  </Text>
                  <Stack spacing={0} fontSize='sm'>
                    <Link href='#how-it-works'>How It Works</Link>
                    <Link href='#features'>Features</Link>
                    <Link href='#pricing'>Pricing</Link>
                  </Stack>
                </Stack>
              </Center>

              <Center w={['60%', 200]}>
                <Stack spacing={1} textAlign='center'>
                  <Text fontSize='25px' fontWeight='400'>
                    Support
                  </Text>
                  <Stack spacing={0} fontSize='sm'>
                    <Link href='#contact'>Contact Us</Link>
                    <Link href='#faqs'>FAQs</Link>
                    <Link href='#privacy'>Privacy</Link>
                    <Link href='#terms'>Terms</Link>
                  </Stack>
                </Stack>
              </Center>
            </Flex>
          </GridItem>
        </Grid>

        <Flex
          alignItems='center'
          direction={{ base: 'column', lg: 'row' }}
          justifyContent='space-between'
          mb={2}
          gap={6}
        >
          <Flex gap={5} alignItems='center'>
            <Image src={twitter} />
            <Image src={facebook} />
            <Image src={instagram} />
            <Image src={linkedIn} />
          </Flex>

          <Text
            fontWeight={400}
            color='white'
            fontSize='md'
           textAlign={{
            base:'center',
            lg:'start'
           }}
          >
            &copy; 2022. FixBot Technologies Limited. All Rights Reserved.
          </Text>
        </Flex>
      </Box>
    </>
  )
}

export default Footer
