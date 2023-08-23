import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Card, Cart, Counter, FooterCard, TagContainer } from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeesProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeesProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }
  const formattedPrice = formatMoney(coffee.price)

  function IncrementQuantity() {
    setQuantity((prevState) => {
      return prevState + 1
    })
  }

  function DecrementQuantity() {
    if (quantity > 1) {
      setQuantity((prevState) => {
        return prevState - 1
      })
    }
  }

  return (
    <Card>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <TagContainer>
        {coffee.tags.map((tag) => (
          <p className="tag" key={`${coffee.id}${tag}`}>
            {tag}
          </p>
        ))}
      </TagContainer>

      <h1>{coffee.name}</h1>
      <h2>{coffee.description}</h2>

      <FooterCard>
        <p className="price">
          <span>R$ </span>
          {formattedPrice}
        </p>

        <Counter>
          <Minus
            onClick={DecrementQuantity}
            className="minusIcon"
            weight="bold"
          />

          <input type="number" name="" id="" value={quantity} readOnly />

          <Plus
            onClick={IncrementQuantity}
            className="plusIcon"
            weight="bold"
          />
        </Counter>

        <Cart onClick={handleAddToCart}>
          <ShoppingCartSimple weight="fill" />
        </Cart>
      </FooterCard>
    </Card>
  )
}
