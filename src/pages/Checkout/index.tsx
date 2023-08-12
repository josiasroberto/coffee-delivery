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

export function Checkout() {
  const isCartEmpty = true
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
          {isCartEmpty ? (
            <EmptyCart>
              <p>Carrinho vazio</p>
              <img src={emptyCartImg} alt="" />
              <CartButton>Selecionar Cafés</CartButton>
            </EmptyCart>
          ) : (
            <>
              <CoffeeCart />
              <PriceContainer>
                <div>
                  <p>Total de itens</p>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>
                <div className="totalWrapper">
                  <p>Total</p>
                  <span>R$ 33,20</span>
                </div>
              </PriceContainer>

              <CartButton>CONFIRMAR PEDIDO</CartButton>
            </>
          )}
        </CartContainer>
      </RightContainer>
    </CheckoutContainer>
  )
}
