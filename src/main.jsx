import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/card/Card'
import Menu from './components/menu/Menu'
import './index.css'

const films =[
  {
    title: 'película 1',
    desc:'esta es la película 1',
    length: '100 min'
  },
  {
    title: 'película 2',
    desc:'esta es la película 2',
    length: '105 min'
  },
  {
    title: 'película 3',
    desc:'esta es la película 3',
    length: '110 min'
  },
  {
    title: 'película 4',
    desc:'esta es la película 4',
    length: '115 min'
  },
  {
    title: 'película 5',
    desc:'esta es la película 5',
    length: '120 min'
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <section className='films'>
      {
        films.map((movie, index) => {
          return <Card movie={movie} key={index}/>
        })
      }
    </section>
  </React.StrictMode>,
)

//2:14:00 - 19-09-2023