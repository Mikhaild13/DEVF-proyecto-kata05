import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home/Home'
import Movies from './components/movies/Movies'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <h1>404 - ruta no encontrada</h1>,
    children:[{
      path:'/',
      element: <Movies/>
      },{
        path:'/series',
        element: <h1>Series</h1>
      },{
        path:'/peliculas',
        element: <h1>Películas</h1>
      },{
        path:'/novedades-populares',
        element: <h1>Novedades populares</h1>
      },{
        path:'/mi-lista',
        element: <h1>Mi Lista</h1>
      },{
        path:'/explora-por-idiomas',
        element: <h1>Explora por idiomas</h1>
      }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)

//01:22:00 - 03-10-2023