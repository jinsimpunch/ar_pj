import styled from "styled-components";
import dineImg from "../img/dineImg.png";
import { Link, Outlet, useMatch } from "react-router-dom";

const ComponentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px 0px;
`;

const Box = styled.div`
  margin-bottom: -60px;
`;

const Img = styled.img`
  max-width: 480px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -130px;
  left: 20px;
`;

const TextOne = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.mainTextColor};
  text-align: left;
  margin-bottom: 5px;
  text-shadow: 3px 3px 3px ${(props) => props.theme.textShadow};
`;
const TextTwo = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.mainTextColor};
  text-align: left;
  text-shadow: 3px 3px 3px ${(props) => props.theme.textShadow};
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.textShadow};
  padding: 7px 0px;
  border: 3px solid black;
  border-radius: 10px;
  color: ${(props) => (props.isActive ? props.theme.textHover : "white")};
  a {
    display: block;
  }
`;

function Shopping() {
  const shopMatch = useMatch("/shop");
  const dineMatch = useMatch("/dine");

  console.log(shopMatch, dineMatch);

  return (
    <ComponentsContainer>
      <Box>
        <Img src={dineImg} alt="main" />
        <TextWrapper>
          <TextOne>INCHEON AIPORT</TextOne>
          <TextTwo>DUTY FREE</TextTwo>
        </TextWrapper>
      </Box>
      <Tabs>
        <Tab isActive={shopMatch !== null}>
          <Link to={"shop"}>shop</Link>
        </Tab>
        <Tab isActive={dineMatch !== null}>
          <Link to={"dine"}>dine</Link>
        </Tab>
      </Tabs>
      <Outlet />
    </ComponentsContainer>
  );
}

export default Shopping;
