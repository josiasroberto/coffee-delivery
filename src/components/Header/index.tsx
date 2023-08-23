import { NavLink } from 'react-router-dom'

import { CartButton, HeaderContainer, LocationButton } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartQuantity } = useCart()
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img className="logo" src={logoCoffeeDelivery} alt="" />
        </NavLink>

        <div>
          <LocationButton>
            <MapPin weight="fill" />
            <p>Itinga, MG</p>
          </LocationButton>

          <NavLink to="/checkout" title="Checkout">
            <CartButton>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart weight="fill" />
            </CartButton>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
