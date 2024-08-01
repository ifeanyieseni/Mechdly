import { Footer, Navbar } from './components'
import { Container } from '@chakra-ui/react'
import Home from './pages/Home'

function App() {
  return (
    <Container maxWidth='7xl' minHeight={'100vh'}>
      <Navbar />
      <Home />

      <Footer />
    </Container>
  )
}

export default App
