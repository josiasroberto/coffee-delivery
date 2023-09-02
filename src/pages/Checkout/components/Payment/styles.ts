import { styled } from 'styled-components'

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  > p {
    color: ${(props) => props.theme['base-error']};
  }

  .paymentDescription {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .currencyDollarSpan {
    font-size: 1.375rem;
    color: ${(props) => props.theme.purple};
  }

  .paymentTitlesWrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.125rem;
    flex: 1 0 0;
  }

  .paymentTitle {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .paymentMethodsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
`
export const PaymentMethod = styled.div`
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  input:checked + label div {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
export const PaymentMethodContent = styled.div`
  width: 11.1666875rem;
  display: flex;
  padding: 1rem;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  flex: 1 0 0;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-button']};

  user-select: none;

  span {
    display: flex;
    font-size: 1rem;
    color: ${(props) => props.theme.purple};
    align-items: center;
  }

  p {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
