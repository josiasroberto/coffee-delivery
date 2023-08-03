import { styled } from 'styled-components'

export const Card = styled.div`
  padding: 1.25rem;
  width: 15.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 19.5rem;
  margin-bottom: 0.5rem;
  border-radius: 6px 36px;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;

    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
  }

  h1 {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};

    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
    text-align: center;
  }

  h2 {
    margin-top: 0.5rem;
    color: ${(props) => props.theme['base-label']};

    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
  }
`

export const TagContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 0.25rem;
`

export const FooterCard = styled.footer`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13rem;

  .price {
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
  }
  .price span {
    font-size: 0.875rem;
    text-align: right;
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

export const Cart = styled.span`
  display: flex;
  padding: 0.5rem;
  font-size: 1.375rem;

  border-radius: 6px;
  color: ${(props) => props.theme['base-card']};
  background: ${(props) => props.theme['purple-dark']};
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
