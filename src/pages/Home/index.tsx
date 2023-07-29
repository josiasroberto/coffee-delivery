import {
  HeaderContent,
  HeaderHomeContainer,
  ItemsContent,
  SpanIcon,
  TitleContent,
} from './styles'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import coffeeDeliveryImage from '../../assets/coffee-delivery-image.svg'

export function Home() {
  return (
    <HeaderHomeContainer>
      <HeaderContent>
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
                  <ShoppingCart size={16} weight="fill" />
                </SpanIcon>
                Compra simples e segura
              </p>

              <p>
                <SpanIcon $bgColor="yellow">
                  <Package size={16} weight="fill" />
                </SpanIcon>
                Entrega rápida e rastreada
              </p>
            </div>

            <div>
              <p>
                <SpanIcon $bgColor="baseText">
                  <Timer size={16} weight="fill" />
                </SpanIcon>
                Embalagem mantém o café intacto
              </p>

              <p>
                <SpanIcon $bgColor="purple">
                  <Coffee size={16} weight="fill" />
                </SpanIcon>
                O café chaga fresquinho até você
              </p>
            </div>
          </ItemsContent>
        </div>
        <img src={coffeeDeliveryImage} alt="" />
      </HeaderContent>
    </HeaderHomeContainer>
  )
}
