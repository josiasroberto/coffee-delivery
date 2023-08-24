import { styled } from 'styled-components'

export const CoffeeCartContainer = styled.div`
  padding: 0.5rem 0.25rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  align-self: stretch;

  .coffeeCartPrice {
    text-align: right;

    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }
`

export const CoffeeCartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  img {
    width: 4rem;
  }
`

export const CoffeeCartDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .actionsCoffeeCart {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button {
      display: flex;
      height: 2.375rem;
      padding: 0 0.5rem;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      cursor: pointer;

      transition: all 0.2s;
      border: none;
      border-radius: 6px;
      background: ${(props) => props.theme['base-button']};

      svg {
        color: ${(props) => props.theme.purple};
        font-size: 1rem;
      }

      p {
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
      }
    }

    span:hover {
      background: ${(props) => props.theme['base-hover']};

      svg {
        color: ${(props) => props.theme['purple-dark']};
      }
      p {
        color: ${(props) => props.theme['base-subtitle']};
      }
    }
  }
`

export const Counter = styled.div`
  padding: 0.5rem;
  height: 2.375rem;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  border-radius: 6px;
  color: ${(props) => props.theme.purple};
  background: ${(props) => props.theme['base-button']};
  transition: all 0.2s;

  cursor: pointer;

  & .minusIcon:hover,
  .plusIcon:hover {
    color: ${(props) => props.theme['purple-dark']};
  }

  input {
    width: 1.25rem;
    background: ${(props) => props.theme['base-button']};
    border: none;
    text-align: center;
    font-size: 1rem;
  }
`

export const Divider = styled.div`
  align-self: stretch;
  border: 0.0625rem solid ${(props) => props.theme['base-button']};
`
