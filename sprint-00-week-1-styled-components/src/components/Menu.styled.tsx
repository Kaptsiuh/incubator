import styled from "styled-components";

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;

    li > a {
      color: green;
    }

    li + li {
      // для того чтобы задавать отступы только от соседних таких же элементов
      margin-left: 20px;
    }
  }
`;
