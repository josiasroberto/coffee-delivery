import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HeaderContent,
  HeaderHomeContainer,
  ItemsContent,
  SpanIcon,
  TitleContent,
} from './styles'

import coffeeDeliveryImage from '../../../../assets/coffee-delivery-image.svg'

export function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <HeaderContent className="headerContainer">
        <div>
          <TitleContent>
            <p>Encontre o café perfeito para qualquer hora do dia</p>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </TitleContent>

          <ItemsContent>
            <div>
              <p>
                <SpanIcon $bgColor="yellowDark">
                  <ShoppingCart weight="fill" />
                </SpanIcon>
                Compra simples e segura
              </p>

              <p>
                <SpanIcon $bgColor="yellow">
                  <Package weight="fill" />
                </SpanIcon>
                Entrega rápida e rastreada
              </p>
            </div>

            <div>
              <p>
                <SpanIcon $bgColor="baseText">
                  <Timer weight="fill" />
                </SpanIcon>
                Embalagem mantém o café intacto
              </p>

              <p>
                <SpanIcon $bgColor="purple">
                  <Coffee weight="fill" />
                </SpanIcon>
                O café chega fresquinho até você
              </p>
            </div>
          </ItemsContent>
        </div>
        <img src={coffeeDeliveryImage} alt="" />
      </HeaderContent>
    </HeaderHomeContainer>
  )
}
