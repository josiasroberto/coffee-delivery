import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import expressoCoffeeImage from '../../../../assets/coffees/expresso.png'
import { Card, Cart, Counter, FooterCard, TagContainer } from './styles'

export function CoffeeCard() {
  return (
    <Card>
      <img src={expressoCoffeeImage} alt="" />
      <TagContainer>
        <p className="tag">Tradicional</p>
        <p className="tag">Com Leite</p>
      </TagContainer>

      <h1>Expresso Tradicional</h1>
      <h2>O tradicional café feito com água quente e grãos moídos</h2>

      <FooterCard>
        <p className="price">
          <span>R$ </span>
          9,90
        </p>

        <Counter>
          <Minus className="minusIcon" weight="bold" />

          <input type="number" name="" id="" value={1} />

          <Plus className="plusIcon" weight="bold" />
        </Counter>

        <Cart>
          <ShoppingCartSimple weight="fill" />
        </Cart>
      </FooterCard>
    </Card>
  )
}
