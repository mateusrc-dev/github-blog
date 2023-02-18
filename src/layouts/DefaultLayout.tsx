import { Header } from '../components/Header'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'

export function DefaultLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}
