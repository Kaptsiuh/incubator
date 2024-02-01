import styled, { css } from "styled-components";
import { MyAnimation } from "../styles/animations/Animations";

type StyleBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType: "primary" | "outlined";
  active?: boolean;
};

export const StyledBtn = styled.button<StyleBtnPropsType>`
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;

  ${(props) =>
    props.btnType === "outlined" &&
    css<StyleBtnPropsType>`
      border: 2px solid ${(props) => props.color || "gray"};
      color: ${(props) => props.color || "gray"};
      background-color: transparent;

      &:hover {
        border-color: #32cc1d;
        color: #32cc1d;
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.btnType === "primary" &&
    css<StyleBtnPropsType>`
      background-color: ${(props) => props.color || "gray"};
      color: snow;

      &:hover {
        background-color: #da62c6;
      }
    `}

    ${(props) =>
    props.active &&
    css<StyleBtnPropsType>`
      box-shadow: 5px 5px 5px 5px #696268;
    `}
`;

export const SuperButton = styled(StyledBtn)<StyleBtnPropsType>`
  border-radius: 15px;
  background-color: yellow;
  color: black;
  &:hover {
    animation: ${MyAnimation} 2s ease-in-out infinite;
  }
`;
