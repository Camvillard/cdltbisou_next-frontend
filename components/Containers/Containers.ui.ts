import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 96vw;
  margin: auto;
`
interface IGridContainerProps {
  lgColumns: number;
  smColumns: number
}
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(${(props: IGridContainerProps) => props.smColumns}, 1fr);
    grid-gap: 16px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(${(props: IGridContainerProps) => props.lgColumns}, 1fr);
    grid-gap: 24px;
  }
`