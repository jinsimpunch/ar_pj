import styled from "styled-components";

const ComponentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const MapBox = styled.div`
  border: 5px solid transparent;
  border-image: linear-gradient(
    to bottom right,
    #b827fc 0%,
    #2c90fc 25%,
    #b8fd33 50%,
    #fec837 75%,
    #fd1892 100%
  );
  border-image-slice: 1;
  margin: 20px auto;
  height: 42vh;
  width: 100vw;
`;

function Map() {
  return (
    <ComponentsContainer>
      <MapBox>map</MapBox>
    </ComponentsContainer>
  );
}

export default Map;
