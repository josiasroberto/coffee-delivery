import { styled } from 'styled-components'

import bgHeaderHome from '../../assets/bg-header-home.png'

export const HeaderHomeContainer = styled.header`
  width: 100%;
  background: url(${bgHeaderHome}) no-repeat;
  background-size: cover;
`

export const HeaderContent = styled.div`
  margin-top: 6.75rem;
  display: flex;
  padding: 5.75rem 10rem;
  justify-content: space-between;
  gap: 3.5rem;
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p:first-child {
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const ItemsContent = styled.div`
  margin-top: 4.125rem;
  display: flex;
  width: 35.5rem;
  gap: 2.5rem;

  div {
    p + p {
      margin-top: 1.25rem;
    }
  }

  p {
    display: flex;
    font-size: 1rem;
    gap: 0.75rem;
    align-items: center;
  }
`
const BG_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  purple: 'purple',
} as const

interface SpanIconProps {
  $bgColor: keyof typeof BG_COLORS
}
export const SpanIcon = styled.span<SpanIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[BG_COLORS[props.$bgColor]]};
  border-radius: 1000px;
`

export const CoffeeListContainer = styled.main``
