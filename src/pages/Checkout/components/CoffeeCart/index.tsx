import { Minus, Plus, Trash } from 'phosphor-react'
import {
  CoffeeCartContainer,
  Counter,
  CoffeeCartDetails,
  Divider,
  CoffeeCartInfo,
} from './styles'

import expressoCoffeeImage from '../../../../assets/coffees/expresso.png'

export function CoffeeCart() {
  return (
    <>
      <CoffeeCartContainer>
        <CoffeeCartInfo>
          <img src={expressoCoffeeImage} alt="" />
          <CoffeeCartDetails>
            <p>Expresso Tradicional</p>
            <div className="actionsCoffeeCart">
              <Counter>
                <Minus className="minusIcon" weight="bold" />

                <input type="number" name="" id="" value={1} />

                <Plus className="plusIcon" weight="bold" />
              </Counter>
              <span>
                <Trash />
                <p>Remover</p>
              </span>
            </div>
          </CoffeeCartDetails>
        </CoffeeCartInfo>
        <p className="coffeeCartPrice">R$ 9,90</p>
      </CoffeeCartContainer>
      <Divider />
    </>
  )
}
