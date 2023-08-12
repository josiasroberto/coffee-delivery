import { styled } from 'styled-components'

export const MainHomeContainer = styled.div`
  padding: 2rem 10rem;

  .titleHomeContainer {
    max-width: 70rem;
    margin: 0 auto;

    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;

    margin-bottom: 3.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeListContainer = styled.main`
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  align-items: center;

  gap: 2rem;
  flex-wrap: wrap;
`
