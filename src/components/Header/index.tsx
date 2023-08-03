import { NavLink } from 'react-router-dom'

import { Cart, HeaderContainer, LocationSpan } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img className="logo" src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <div>
          <LocationSpan>
            <MapPin weight="fill" />
            <p>Itinga, MG</p>
          </LocationSpan>

          <NavLink to="/checkout" title="Checkout">
            <Cart>
              <ShoppingCart weight="fill" />
            </Cart>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
