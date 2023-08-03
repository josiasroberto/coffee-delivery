import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  padding: 2rem 10rem;
  background: ${(props) => props.theme.background};

  width: 100vw;

  nav {
    margin: 0 auto;
    max-width: 70rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    .logo {
      max-width: 7.054rem;
    }
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
  font-size: 1.375rem;

  border-radius: 6px;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme.purple};

  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  p {
    color: ${(props) => props.theme['purple-dark']};
  }
`
export const Cart = styled.span`
  display: flex;
  padding: 0.5rem;
  font-size: 1.375rem;

  border-radius: 6px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  position: relative;

  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &::after {
    content: '3';
    width: 1.25rem;
    height: 1.25rem;

    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

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
