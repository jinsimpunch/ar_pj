import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin-bottom: 50px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Li = styled.li`
  font-size: 22px;
  font-weight: 500;
  &:hover {
    color: ${(porps) => porps.theme.textHover};
    transition: color 0.3s ease-in;
  }
`;

function Header() {
  const nowWhere = useLocation();
  console.log(nowWhere);
  return (
    <StyledHeader>
      <Ul>
        <Li>
          <Link to={"/"}>
            <img src={require("../img/logosvg.svg").default} alt="logo" />
          </Link>
        </Li>
        <Li>
          <Link to={"map"}>지도</Link>
        </Li>
        <Li>
          <Link to={"shopping"}>쇼핑&식당</Link>
        </Li>
        <Li>
          <Link to={"commu"}>커뮤니티</Link>
        </Li>
      </Ul>
      <hr />
    </StyledHeader>
  );
}

export default Header;
