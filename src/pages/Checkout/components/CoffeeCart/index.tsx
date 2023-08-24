import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CoffeeCartContainer,
  Counter,
  CoffeeCartDetails,
  Divider,
  CoffeeCartInfo,
} from './styles'

import { CartItem } from '../../../../contexts/CartContext'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, 'decrease')
  }

  function handleRemove() {
    removeCartItem(coffee.id)
  }

  const coffeeTotal = coffee.price * coffee.quantity

  const formattedPrice = formatMoney(coffeeTotal)

  return (
    <>
      <CoffeeCartContainer>
        <CoffeeCartInfo>
          <img src={`/coffees/${coffee.photo}`} alt="" />
          <CoffeeCartDetails>
            <p>{coffee.name}</p>
            <div className="actionsCoffeeCart">
              <Counter>
                <Minus
                  onClick={handleDecrease}
                  className="minusIcon"
                  weight="bold"
                />

                <input type="number" name="" id="" value={coffee.quantity} />

                <Plus
                  onClick={handleIncrease}
                  className="plusIcon"
                  weight="bold"
                />
              </Counter>
              <button onClick={handleRemove}>
                <Trash />
                <p>Remover</p>
              </button>
            </div>
          </CoffeeCartDetails>
        </CoffeeCartInfo>
        <p className="coffeeCartPrice">R$ {formattedPrice}</p>
      </CoffeeCartContainer>
      <Divider />
    </>
  )
}
