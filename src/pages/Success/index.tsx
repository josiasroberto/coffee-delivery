import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  HighlightInfo,
  MainSuccessContainer,
  OrderInfoContainer,
  RowInfo,
  SpanIcon,
  SuccessContainer,
  TextInfo,
} from './styles'

import successPageImg from '../../assets/success-page-illustration.png'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <MainSuccessContainer className="mainSuccessContainer">
        <OrderInfoContainer>
          <RowInfo>
            <SpanIcon $bgColor="purple">
              <MapPin weight="fill" />
            </SpanIcon>

            <TextInfo>
              <p>
                Entrega em{' '}
                <HighlightInfo>Rua João Daniel Martinelli, 102 </HighlightInfo>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </TextInfo>
          </RowInfo>

          <RowInfo>
            <SpanIcon $bgColor="yellow">
              <Timer weight="fill" />
            </SpanIcon>
            <TextInfo>
              <p>Previsão de entrega</p>
              <HighlightInfo>20 min - 30 min</HighlightInfo>
            </TextInfo>
          </RowInfo>

          <RowInfo>
            <SpanIcon $bgColor="yellowDark">
              <CurrencyDollar weight="fill" />
            </SpanIcon>
            <TextInfo>
              <p>Previsão de entrega</p>
              <HighlightInfo>20 min - 30 min</HighlightInfo>
            </TextInfo>
          </RowInfo>
        </OrderInfoContainer>
        <img src={successPageImg} alt="" />
      </MainSuccessContainer>
    </SuccessContainer>
  )
}
