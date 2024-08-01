import { Box, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'

import CustomCard from './CustomCard'
import gradientImage3 from '../assets/gradient3.png'
import icon1 from '../assets/icon1.png'
import icon2 from '../assets/icon2.png'
import icon3 from '../assets/icon3.png'
import icon4 from '../assets/icons4.png'
import icon5 from '../assets/icon5.png'

const Services = () => {
  return (
    <Flex
      minH={'100vh'}
      mt={{ base: 150, lg: 250 }}
      flexDirection='column'
      alignItems={'center'}
      justifyContent='center'
      gap={8}
    >
      <Text
        fontSize={{
          base: '2xl',
          md: '36px',
        }}
        letterSpacing={'5px'}
        textTransform='uppercase'
        fontWeight='400'
       
        color='white'
      >
        Services We Offer.
      </Text>
      {/* <Flex wrap='wrap' justify='space-between' gap={8} align='center' width='100%'>
        <Flex gap={8}>
          <CustomCard
            icon='path_to_icon'
            heading='Living room Sofa'
            text='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
          />
          <CustomCard
            icon='path_to_icon'
            heading='Living room Sofa'
            text='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
          />
          <CustomCard
            icon='path_to_icon'
            heading='Living room Sofa'
            text='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
          />
        </Flex>
        <Flex justify='center' width='100%' gap={8}>
          <CustomCard
            icon='path_to_icon'
            heading='Living room Sofa'
            text='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
          />
          <CustomCard
            icon='path_to_icon'
            heading='Living room Sofa'
            text='This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.'
          />
        </Flex>
      </Flex> */}

      <Wrap spacing='30px' justify='center' position='relative' zIndex={1}>
        <WrapItem>
          <CustomCard
            icon={icon1}
            heading='Scheduling'
            text='Let your clients choose the most efficient time to meet with you and fix their car issues.'
          />
        </WrapItem>
        <WrapItem>
          <CustomCard
            icon={icon2}
            heading='Payment gateway'
            text='An efficient payment system worthy of your services.'
          />
        </WrapItem>
        <WrapItem>
          <CustomCard
            icon={icon3}
            heading='Generalize invoice '
            text='Get your receipts and invoices for payment proof.'
          />
        </WrapItem>
        <WrapItem>
          <CustomCard
            icon={icon4}
            heading='Send Reminders'
            text='Let’s remind you and your clients about the upcoming meetings before time.'
          />
        </WrapItem>
        <WrapItem>
          <CustomCard
            icon={icon5}
            heading='Send SMS'
            text='Stay on the loop with all your business activities with our SMS notifications..'
          />
        </WrapItem>
      </Wrap>

      <Box
        as='img'
        src={gradientImage3}
        position='absolute'
        w={{ base: 300, md: 'auto' }}
        zIndex={0}
        filter={'blur(200px)'}
        opacity={0.4}
      />
    </Flex>
  )
}

export default Services
