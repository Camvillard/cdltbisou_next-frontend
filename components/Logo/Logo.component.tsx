import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`

const Cdlt = styled.h2`
  font-weight: 800;
  font-size: 2.2rem;
`

const Bisou = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
`
interface ICdltProps {
  size: string;
}

interface IlogoProps {
  size: string;
}

const Logo = (props: IlogoProps) => {
  const { size } = props;
  return (
    <LogoWrapper>
      <Cdlt>cdlt</Cdlt>
      <Bisou>bisou</Bisou>
    </LogoWrapper>
  )
}

export default Logo;