import { useState } from 'react'
import gitLogo from '../assets/githublogowhite.jpg'
import ItemRepo from '../components/ItemRepo'
import Input from '../components/input'
import { Container } from './styles'
import Button from '../components/Button'
import { api } from '../services/api'

function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {

    const { data } = await api.get(`repos/${currentRepo}`)

    if (data.id) {
      const isExist = repos.find(repo => repo.id == data.id);
      if (!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }

    }
    alert('Repositório não encontrado!')
  }

  const handleRemoveRepo = (id) => {
    const updateRepos = repos.filter(repo => repo.id !== id)
    setRepos(updateRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo github created by IA" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo key={repo.id} repo={repo} handleRemoveRepo={handleRemoveRepo} />)}

    </Container>
  )
}

export default App
