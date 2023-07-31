import styled from "styled-components";

export const CreateListStyle = styled.div`
  width: 100vw;
  height: 100vh;
  border: solid var(--color2);
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    color: var(--color2);
  }

  .close-modal {
    width: 90%;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: end;
    align-items: center;
    color: gray;
    margin: 0 auto;
    color: var(--color2);
  }

  .container-modal {
    width: 400px;
    max-width: 100%;
    height: 550px;
    max-height: 100%;
    background: black;
    border-radius: 8px;

    form {
      border-radius: 8px;
      width: 100%;
      max-width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      background: black;
      border: solid var(--color2);
    }

    input {
      width: 80%;
      max-width: 100%;
      height: 2rem;
      padding: 5px;
      border-radius: 4px;
      font-size: 14px;
      background: white;
      color: var(--color1);
    }

    .btn-submit {
      :hover {
        background: var(--color1);
        color: var(--color2);
        border: solid var(--color2);
      }
    }

    .btn-reset {
      :hover {
        background: var(--color1);
        color: var(--color2);
        border: solid var(--color2);
      }
    }

    .container-list-name {
      display: flex;
      flex-direction: column;
      height: 6rem;
      justify-content: center;
      align-items: center;
    }

    .container-item-data {
      display: flex;
      flex-direction: column;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-top: solid gray 0.1px;
      border-bottom: solid gray 0.1px;
      padding: 10px 0;

      hr {
        margin: 5px 0;
        width: 80%;
        color: gray;
      }
      .add-item {
        width: 80%;
        font-size: 12px;
        color: gray;
        display: flex;
        justify-content: end;

        :hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }
    :-webkit-scrollbar {
      display: none;
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
