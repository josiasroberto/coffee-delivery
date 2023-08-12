import { useState, ChangeEvent } from 'react'
import { FormContainer } from './styles'

export function Form() {
  const [newComplemento, setNewComplement] = useState('')

  function handleNewComplementoChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewComplement(event.target.value)
  }

  return (
    <FormContainer>
      <input type="number" className="cep" placeholder="CEP" />
      <input type="text" className="rua" placeholder="Rua" />

      <div>
        <input type="text" className="numero" placeholder="Número" />

        <div
          className={
            newComplemento
              ? 'inputComplementWrapper'
              : 'inputComplementWrapperEmpty'
          }
        >
          <input
            type="text"
            className="complemento"
            placeholder="Complemento"
            value={newComplemento}
            onChange={handleNewComplementoChange}
          />
        </div>
      </div>
      <div>
        <input type="text" className="bairro" placeholder="Bairro" />
        <input type="text" className="cidade" placeholder="Cidade" />
        <input type="text" className="uf" placeholder="UF" />
      </div>
    </FormContainer>
  )
}
