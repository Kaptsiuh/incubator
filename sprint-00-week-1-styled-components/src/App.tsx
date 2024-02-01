import React from "react";
import "./App.css";
import styled from "styled-components";
import { StyledBtn } from "./components/Button.styled";
import { Link } from "./components/Link.styled";
import { SuperButton } from "./components/Button.styled";
import { Menu } from "./components/Menu.styled";
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <div>
      <Menu>
        <ul>
          <li>
            <a href="#">menu link 1</a>
          </li>
          <li>
            <a href="#">menu link 2</a>
          </li>
          <li>
            <a href="#">menu link 3</a>
          </li>
        </ul>
      </Menu>

      <Box>
        {/* <StyledBtn as={Link} href={"#"}>
          LinkComponent
        </StyledBtn> */}
        {/* <StyledBtn fontSize={"20px"} as={"a"} href={"#"}>
          Link
        </StyledBtn> */}
        {/* <StyledBtn color={"red"}>Hell</StyledBtn> */}
        {/* <SuperButton fontSize={"40px"}>Syper Hell</SuperButton> */}
        <StyledBtn color={myTheme.colors.primary} active btnType={"primary"}>
          Hell
        </StyledBtn>
        <StyledBtn color={myTheme.colors.secondary} btnType={"outlined"}>
          Hell
        </StyledBtn>
      </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 20px;

  button {
    cursor: pointer;
  }

  ${Link} {
    cursor: zoom-in;
  }

  @media ${myTheme.media.tablet} {
    flex-direction: column;
  }
`;
