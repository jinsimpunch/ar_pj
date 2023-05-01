import styled from "styled-components";
import mainImg from "../img/mainImg.png";

const ComponentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const Img = styled.img`
  max-width: 480px;
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const TextOne = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.mainTextColor};
  text-align: center;
  margin-bottom: 5px;
  text-shadow: 3px 3px 3px ${(props) => props.theme.textShadow};
`;
const TextTwo = styled.span`
  font-size: 40px;
  font-weight: 800;
  color: ${(props) => props.theme.mainTextColor};
  text-align: center;
  text-shadow: 3px 3px 3px ${(props) => props.theme.textShadow};
`;

function Home() {
  return (
    <ComponentsContainer>
      <Img src={mainImg} alt="main" />
      <TextWrapper>
        <TextOne>여행은 즐겁게</TextOne>
        <TextTwo>비행은 편리하게</TextTwo>
      </TextWrapper>
    </ComponentsContainer>
  );
}

export default Home;
