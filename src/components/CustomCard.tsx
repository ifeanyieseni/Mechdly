import { Box, Stack, Image, Text } from '@chakra-ui/react'
import avatarIcon from '../assets/Reminder.png'

type CardProps = {
  icon?: string
  secondIcon?: string
  heading: string
  text: string
}

const CustomCard = ({ icon, heading, text }: CardProps) => (
  <Box
    w={{
      base: '90%',
      md: '600px',
      lg:'380px'
    }}
    minHeight='280px'
    bg='gradient.100'
    border='2px solid'
    borderColor='primary.500'
    borderRadius='30px'
    boxSizing='border-box'
    mx='auto'
    sx={{ backdropFilter: 'blur(21px)' }}
    // Removed width property from here
  >
    <Box py='4' px='8'>
      <Stack spacing={4} align='center'>
        <Box
          display={icon ? 'flex' : 'none'}
          borderRadius='full'
          textAlign='center'
          w='69px'
          h='69px'
          mx='auto'
          justifyContent='center'
          alignItems='center'
          bg='primary.500'
        >
          <Image src={icon} w='36px' alt='Icon' />
        </Box>

        <Box
          display={!icon ? 'flex' : 'none'}
          borderRadius='full'
          textAlign='end'
          justifyContent='end'
          w='full'
        >
          <Image src={avatarIcon} alt='Second Icon' />
        </Box>

        <Stack spacing='3' color='white' maxW={"500px"} w='100%' mx='auto'>
          <Text fontSize='25px' fontWeight='400' >
            {heading}
          </Text>
          <Text fontSize='17px'>{text}</Text>
        </Stack>
      </Stack>
    </Box>
  </Box>
)

export default CustomCard
