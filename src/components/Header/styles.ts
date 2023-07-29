import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;
  /* position: fixed; */
  width: 100%;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
  }

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`
export const LocationSpan = styled.span`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  p {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const Cart = styled.span`
  display: flex;
  padding: 0.5rem;

  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;

  &::after {
    content: '3';
    width: 1.25rem;
    height: 1.25rem;

    position: absolute;
    top: -25%;
    right: -25%;

    border-radius: 9999px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: -0.72px;
  }
`
