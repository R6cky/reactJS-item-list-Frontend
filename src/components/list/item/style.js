import styled from "styled-components";

export const ItemStyle = styled.li`
  width: 400px;
  height: 100px;
  margin-top: 20px;
  border: solid var(--color2) 0.2px;
  text-align: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: var(--color2);

  .list-name {
    width: 100%;
    height: 30%;
    font-size: 22px;
    font-weight: bold;
  }

  .view-remove {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    font-size: 1rem;
    span {
      :hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
