import { styled } from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    align-self: stretch;
  }

  .cep,
  .numero,
  .bairro {
    width: 12.5rem;
  }

  .rua,
  .complemento,
  .cidade {
    width: 100%;
  }

  .uf {
    width: 3.75rem;
  }

  .inputComplementWrapper {
    width: 100%;
  }

  .inputComplementWrapperEmpty {
    width: 100%;
    position: relative;

    &:focus-within::after {
      display: none;
    }
  }

  .inputComplementWrapperEmpty::after {
    content: 'Opcional';
    font-style: italic;
    font-size: 0.75rem;
    position: absolute;
    top: 30%;
    right: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }
`
