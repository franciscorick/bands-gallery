import { useEffect, useState } from 'react'
import Header from './components/Header/Header.jsx'
import Card from './components/Card/Card.jsx'
import styles from './App.module.css'


const bandasIniciais = [
  { id: 1, nome: 'Pink Floyd', foto: 'https://m.media-amazon.com/images/I/610RGJlG1ZL.jpg' },
  { id: 2, nome: 'Led Zeppelin', foto: 'https://i.scdn.co/image/207803ce008388d3427a685254f9de6a8f61dc2e' },
  { id: 3, nome: 'The Police', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVbqxbwYeD3h3khi4wxVAvU7dpCwHWM_KhECaaEsF1bw&s=10' },
  { id: 4, nome: 'The Cure', foto: 'https://imusic.b-cdn.net/images/item/original/307/0823564035307.jpg?the-cure-2021-happy-the-man-cd&class=scaled&v=1638523779' },
  { id: 5, nome: 'The Smiths', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT068qnnkLQAWimipzodQiJ6sqgyPIkGsbDgPOmFtdPSA&s=10' },
  { id: 6, nome: 'The Who', foto: 'https://upload.wikimedia.org/wikipedia/pt/d/d1/The_Who_-_Who%27s_Next.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original' },
]

function App() {
  const [bandas, setBandas] = useState([])

  useEffect(() => {
    setBandas(bandasIniciais)
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.grid}>
        {bandas.map((banda) => (
          <Card key={banda.id} nome={banda.nome} foto={banda.foto} />
        ))}
      </main>
    </div>
  )
}

export default App
