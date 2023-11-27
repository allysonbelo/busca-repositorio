import gitLogo from '../assets/githublogowhite.jpg'
import Input from '../components/input'
import {Container} from './styles'

function App() {
  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo github created by IA" />
      <Input />
    </Container>
  )
}

export default App
