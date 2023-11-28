import { useState } from 'react'
import gitLogo from '../assets/githublogowhite.jpg'
import ItemRepo from '../components/ItemRepo'
import Input from '../components/input'
import {Container} from './styles'
import Button from '../components/Button'

function App() {

  const [repos, setRepos] = useState([])




  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo github created by IA" />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  )
}

export default App
