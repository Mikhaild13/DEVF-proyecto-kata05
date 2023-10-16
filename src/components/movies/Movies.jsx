import { useEffect, useState } from 'react'
import Card from '../card/Card'

export default function Peliculas() {

  const [movies, setMovies] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://api-pelis-back.onrender.com/cienciaFiccion')
    .then(response => response.json())
    .then(data => {
      setMovies(data)
      setLoading(false)
    })
  },[])

  if (loading) {
    return <h1>Cargando...</h1>
  } else {
    return (
      <>
      <section>
        <titulo>
            <h4>Tendencias</h4>
        </titulo>
        <contenido className='films'>
          {
            movies.peliculas.map((movie, index) => {
              return <Card movie={movie} key={index}/>
            })
          }
        </contenido>
      </section>
      <section>
        <titulo>
        <h4>Series aclamadas por la crítica</h4>
        </titulo>
        <contenido className='films'>
          {
            movies.peliculas.map((movie, index) => {
              return <Card movie={movie} key={index}/>
            })
          }
        </contenido>
      </section>
      <section>
        <titulo>
        <h4>Series basadas en manga</h4>
        </titulo>
        <contenido className='films'>
          {
            movies.peliculas.map((movie, index) => {
              return <Card movie={movie} key={index}/>
            })
          }
        </contenido>
      </section>
      </>
    )
  }
}
