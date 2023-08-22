import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { Card, Cart, Counter, FooterCard, TagContainer } from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { useState } from 'react'

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
  const formattedPrice = formatMoney(coffee.price)

  const [coffeeCount, setCoffeeCount] = useState(1)

  function IncrementCoffeeCount() {
    setCoffeeCount((prevState) => {
      return prevState + 1
    })
  }

  function DecrementCoffeeCount() {
    if (coffeeCount > 1) {
      setCoffeeCount((prevState) => {
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
            onClick={DecrementCoffeeCount}
            className="minusIcon"
            weight="bold"
          />

          <input type="number" name="" id="" value={coffeeCount} readOnly />

          <Plus
            onClick={IncrementCoffeeCount}
            className="plusIcon"
            weight="bold"
          />
        </Counter>

        <Cart>
          <ShoppingCartSimple weight="fill" />
        </Cart>
      </FooterCard>
    </Card>
  )
}
