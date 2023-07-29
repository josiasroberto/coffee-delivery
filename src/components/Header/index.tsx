import { NavLink } from 'react-router-dom'

import { Cart, HeaderContainer, LocationSpan } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <div>
          <LocationSpan>
            <MapPin size={24} weight="fill" />
            <p>Itinga, MG</p>
          </LocationSpan>
          <Cart>
            <ShoppingCart size={22} weight="fill" />
          </Cart>
        </div>
      </nav>
    </HeaderContainer>
  )
}
