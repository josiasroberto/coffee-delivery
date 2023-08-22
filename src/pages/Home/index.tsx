import { CoffeeListContainer, MainHomeContainer } from './styles'
import { coffees } from '../../data/coffees'

import { CoffeeCard } from './components/CoffeeCard'
import { HeaderHome } from './components/HeaderHome'

export function Home() {
  return (
    <>
      <HeaderHome />
      <MainHomeContainer>
        <p className="titleHomeContainer">Nossos cafés</p>
        <CoffeeListContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeListContainer>
      </MainHomeContainer>
    </>
  )
}
