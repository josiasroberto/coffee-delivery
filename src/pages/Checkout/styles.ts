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
