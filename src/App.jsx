import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [pessoas, setPessoas] = useState([])
  const fetchPessoas = async () => {
    const response = await axios.get('http://localhost:8081/')
    response.data && setPessoas(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchPessoas()
  }, [])

  return (
    <>
      {pessoas.map(pessoa => (<div>{pessoa.nome}</div>))}
    </>
  )
}

export default App
