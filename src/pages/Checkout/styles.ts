import { styled } from 'styled-components'

export const CheckoutContainer = styled.form`
  padding: 9rem 10rem 15rem;

  display: flex;
  justify-content: center;
  gap: 2rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;

  h1 {
    margin-bottom: 0.1875rem;
  }
`

// ------------

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.9375rem;
`

export const CartContainer = styled.div`
  padding: 2.5rem;
  width: 28rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    span {
      font-size: 1rem;
    }
  }

  .totalWrapper {
    p,
    span {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`

export const CartButton = styled.button`
  padding: 0.75rem 0.5rem;
  width: 100%;
  border: none;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};

  color: ${(props) => props.theme.white};
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  p {
    font-size: 1rem;
  }
  img {
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: stretch;
  }
`
