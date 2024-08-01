import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    primary: {
      500: '#F68537',
    },
    secondary: {
      500: '#321A09',
    },
    gradient: {
      100: 'radial-gradient(107.17% 107.17% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)',
    },
    borderColor: 'rgba(246, 133, 55, 0.6)',
  },
  styles: {
    global: {
      // Global styles
      body: {
        bg: '#000000',
        minHeight: '100vh',
      },
    },
  },
  components: {
    Box: {},
    Button: {
      variants: {
        primary: {
          padding: '24px 40px',

          background: '#321A09',
          border: '2px solid rgba(246, 133, 55, 0.6)',
          borderRadius: '37px',
          color: '#FFFFFF',
          fontWeight: '700',
          fontSize: '20px',
          _hover: {
            background: 'rgba(50, 26, 9, 0.8)',
          },
        },
        secondary: {
          padding: '27px 40px',
          background: '#F68537',
          borderRadius: '37px',
          color: '#000000',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '27px',
          _hover: {
            background: '#F68537', // Background color remains the same on hover
          },
        },
      },
    },
  },
})

export default theme
