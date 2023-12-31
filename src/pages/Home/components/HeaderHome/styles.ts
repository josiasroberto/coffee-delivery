import { styled } from 'styled-components'

import bgHeaderHome from '../../../../assets/bg-header-home.png'
import { rgba } from 'polished'

export const HeaderHomeContainer = styled.header`
  /* background: url(${bgHeaderHome}) no-repeat; */
  background: ${({ theme }) => `url(${bgHeaderHome}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.white} 0%,
        ${rgba(theme.background, 0.2)} 50%,
        ${theme.background} 100%
      )`};

  background-size: cover;
`

export const HeaderContent = styled.div`
  display: flex;
  margin: 6.5rem auto 0;
  padding: 5.75rem 10rem;

  justify-content: center;
  gap: 3.5rem;

  div {
    max-width: 36.75rem;
  }
  img {
    max-width: 29.75rem;
  }
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
  min-width: 2rem;
  min-height: 2rem;
  font-size: 1rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[BG_COLORS[props.$bgColor]]};
  border-radius: 1000px;
`
