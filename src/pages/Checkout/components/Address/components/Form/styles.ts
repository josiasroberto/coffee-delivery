import { styled } from 'styled-components'

export const FormContainer = styled.form`
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

  input {
    display: flex;
    padding: 0.75rem;
    align-items: center;

    border-radius: 0.25rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }

    &:focus::placeholder {
      color: transparent;
    }
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
