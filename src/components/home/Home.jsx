import Menu from '../menu/Menu'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}
