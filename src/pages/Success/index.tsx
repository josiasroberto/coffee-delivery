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
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../Checkout'
import { paymentMethods } from '../Checkout/components/Payment'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export function Success() {
  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

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
                <HighlightInfo>
                  {state.street}, {state.number}
                </HighlightInfo>
              </p>
              <p>
                {state.district} - {state.city}, {state.uf}
              </p>
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
              <p>Pagamento na entrega</p>
              <HighlightInfo>
                {paymentMethods[state.paymentMethod].label}
              </HighlightInfo>
            </TextInfo>
          </RowInfo>
        </OrderInfoContainer>
        <img src={successPageImg} alt="" />
      </MainSuccessContainer>
    </SuccessContainer>
  )
}
