import React from 'react'
import {
  Image,
  Button,
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import logo from '../assets/Mechdly logo 2.png'

const Navbar: React.FC = () => {
  

  return (
    <Flex
      as='nav'
      minWidth='max-content'
      alignItems='center'
      justifyContent='space-between'
      wrap='wrap'
      gap={{ base: '2', md: '4' }}
      py={6}
    >
      <Box p='2'>
        <Image src={logo} width={150} />
      </Box>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={IconButton}
              aria-label='Toggle Navigation'
              icon={<HamburgerIcon />}
              display={{ base: 'inline-flex', md: 'none' }}
              isActive={isOpen}
            />
            <MenuList
              display={{ base: 'block', md: 'none' }}
              zIndex='9999'
            >
              <MenuItem>Log in</MenuItem>
              <MenuItem>Get started</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>

      <Flex display={{ base: 'none', md: 'flex' }} gap={4} alignItems='center'>
        <Button variant='primary' px={10} color='white'>
          Log in
        </Button>
        <Button variant='secondary' mr={3}>Get started</Button>
      </Flex>
    </Flex>
  )
}

export default Navbar
