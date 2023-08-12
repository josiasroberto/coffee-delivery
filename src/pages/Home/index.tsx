import { CoffeeListContainer, MainHomeContainer } from './styles'

import { CoffeeCard } from './components/CoffeeCard'
import { HeaderHome } from './components/HeaderHome'

export function Home() {
  return (
    <>
      <HeaderHome />
      <MainHomeContainer>
        <p className="titleHomeContainer">Nossos cafés</p>
        <CoffeeListContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeListContainer>
      </MainHomeContainer>
    </>
  )
}
