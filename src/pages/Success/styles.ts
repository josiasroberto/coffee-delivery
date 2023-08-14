import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  padding: 11.5rem 10rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    max-width: 70rem;
    margin: 0 auto 0.25rem;

    color: ${(props) => props.theme['yellow-dark']};
  }
  p {
    font-size: 1.25rem;
    max-width: 70rem;
    margin: 0 auto;
  }
`

export const MainSuccessContainer = styled.div`
  max-width: 70rem;
  margin: 1.75rem auto 0.25rem;

  display: flex;
  justify-content: space-between;

  img {
    max-width: 30.75rem;
  }
`

export const OrderInfoContainer = styled.div`
  margin: 0.75rem 0;
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  position: relative;

  border-radius: 6px 36px;
  background: ${(props) => props.theme.background};

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`
export const RowInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const BG_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
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

export const TextInfo = styled.div`
  p {
    font-size: 1rem;
  }
`
export const HighlightInfo = styled.span`
  font-size: 1rem;
  font-weight: 700;
`
