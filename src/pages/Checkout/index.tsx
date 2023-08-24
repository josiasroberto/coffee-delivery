import {
  CartContainer,
  CheckoutContainer,
  CartButton,
  EmptyCart,
  LeftContainer,
  PriceContainer,
  RightContainer,
} from './styles'

import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { CoffeeCart } from './components/CoffeeCart'
import emptyCartImg from '../../assets/empty-cart.svg'
import { useCart } from '../../hooks/useCart'
import { NavLink } from 'react-router-dom'
import { formatMoney } from '../../utils/formatMoney'

const shipping = 3.5

export function Checkout() {
  const { cartItems, cartQuantity, cartsItemsTotal } = useCart()

  const cartTotal = shipping + cartsItemsTotal

  const formattedItemsTotal = formatMoney(cartsItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedShipping = formatMoney(shipping)

  return (
    <CheckoutContainer className="checkoutContainer">
      <LeftContainer>
        <h1>Complete seu pedido</h1>

        <Address />
        <Payment />
      </LeftContainer>

      <RightContainer>
        <h1>Cafés selecionados</h1>

        <CartContainer>
          {cartQuantity ? (
            <>
              {cartItems.map((item) => (
                <CoffeeCart key={item.id} coffee={item} />
              ))}

              <PriceContainer>
                <div>
                  <p>Total de itens</p>
                  <span>R$ {formattedItemsTotal}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ {formattedShipping}</span>
                </div>
                <div className="totalWrapper">
                  <p>Total</p>
                  <span>R$ {formattedCartTotal}</span>
                </div>
              </PriceContainer>

              <CartButton>CONFIRMAR PEDIDO</CartButton>
            </>
          ) : (
            <EmptyCart>
              <p>Carrinho vazio</p>
              <img src={emptyCartImg} alt="" />
              <NavLink to="/" title="Home">
                <CartButton>Selecionar Cafés</CartButton>
              </NavLink>
            </EmptyCart>
          )}
        </CartContainer>
      </RightContainer>
    </CheckoutContainer>
  )
}
