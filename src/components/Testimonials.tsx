import { Box, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react'

import CustomCard from './CustomCard'
import gradientImage1 from '../assets/gradient1.png'
import gradientImage2 from '../assets/gradient2.png'
const Testimonials = () => {
  return (
    <Flex
      minH={'100vh'}
      mt={50}
      flexDirection='column'
      alignItems={'center'}
      justifyContent='center'
      gap={8}
      position='relative'
      zIndex={1}
    >
      <Box
        as='img'
        src={gradientImage1}
        position='absolute'
        top={50}
        h='506px'
        w={{ base: 300, md: '516px' }}
        right={0}
        zIndex={0}
        filter={'blur(100px)'}
        opacity={0.4}
      />

      <Box
        as='img'
        src={gradientImage2}
        position='absolute'
        h='588px'
        w={{ base: 300, md: 'auto' }}
        top={50}
        left={0}
        zIndex={0}
        filter={'blur(200px)'}
        opacity={0.4}
      />
      <Text
        fontSize={{
          base: '2xl',
          md: '36px',
        }}
        letterSpacing={'5px'}
        textTransform='uppercase'
        fontWeight='400'
        textAlign='center'
        color='white'
        width={{
          base: '90%',
          md: '752px',
        }}
      >
        what other mechanics say about the experience
      </Text>

      <Wrap spacing='30px' justify='center'>
        <WrapItem>
          <CustomCard
            heading='Emeka and Sons'
            text='A great platform for my business. Was not getting enought time for my customers until I was introduced to mechdly..'
          />
        </WrapItem>
        <WrapItem>
          <CustomCard
            heading='Sam Automobile'
            text='Everything is organized now, clients are happy and I am happy. Superb platform!'
          />
        </WrapItem>
        <WrapItem>
          <CustomCard
            heading='Chima’s Fixes'
            text='Happy I took the advice, this is the level of professionality my clients want to see. Goes hand in hand with my skills. Love it!'
          />
        </WrapItem>
      </Wrap>
    </Flex>
  )
}

export default Testimonials
