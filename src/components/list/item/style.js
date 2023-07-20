import styled from "styled-components";

export const ItemStyle = styled.div`
  width: 400px;
  height: 100px;
  margin-top: 20px;
  border: solid gray;
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .list-name {
    border: solid red;
    width: 50%;
    height: 50%;
  }

  .view-itens {
    font-size: 1rem;
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
