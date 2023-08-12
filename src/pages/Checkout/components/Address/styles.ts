import { styled } from 'styled-components'

export const AddressContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
export const HeaderAddressContainer = styled.header`
  display: flex;
  gap: 0.5rem;

  span {
    font-size: 1.375rem;
    color: ${(props) => props.theme['yellow-dark']};
  }
  h2 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
