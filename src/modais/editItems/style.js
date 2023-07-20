import styled from "styled-components";

export const EditItemStyle = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .container-modal {
    width: 400px;
    max-width: 100%;
    height: 300px;
    max-height: 100%;
    background: black;
    border-radius: 8px;

    form {
      border-radius: 8px;
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: black;
      border: solid gray;

      .close-modal {
        width: 90%;
        height: 100px;
        cursor: pointer;
        display: flex;
        justify-content: end;
        align-items: center;
        color: gray;
        margin: 0 auto;
      }
    }

    input {
      width: 80%;
      max-width: 100%;
      height: 2rem;
      padding: 5px;
      border-radius: 4px;
      font-size: 14px;
    }

    .container-item-data {
      display: flex;
      flex-direction: column;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
    }

    .container-buttons {
      display: flex;
      flex-direction: column;
      height: 7rem;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 30px;

      input {
        cursor: pointer;
      }
    }
  }
`;
