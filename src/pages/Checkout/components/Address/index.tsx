import { MapPinLine } from 'phosphor-react'
import { AddressContainer, HeaderAddressContainer } from './styles'
import { Form } from './components/Form'

export function Address() {
  return (
    <AddressContainer>
      <HeaderAddressContainer>
        <span>
          <MapPinLine />
        </span>
        <div>
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </HeaderAddressContainer>

      <Form />
    </AddressContainer>
  )
}
