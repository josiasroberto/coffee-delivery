import { NavLink } from 'react-router-dom'

import { CoffeeCart } from '../CoffeeCart'
import { CartButton, CartContainer, EmptyCart, PriceContainer } from './styles'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

import emptyCartImg from '../../../../assets/empty-cart.svg'

const shipping = 3.5

export function SelectedCoffees() {
  const { cartItems, cartQuantity, cartsItemsTotal } = useCart()

  const cartTotal = shipping + cartsItemsTotal

  const formattedItemsTotal = formatMoney(cartsItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedShipping = formatMoney(shipping)
  return (
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

          <CartButton type="submit">CONFIRMAR PEDIDO</CartButton>
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
  )
}
