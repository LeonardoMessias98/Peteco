import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;
  padding: 0 20px;

  position: absolute;
  top: 0;

  background: var(--master-color);

  div.content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1200px;

    img {
      width: 50px;
      height: 50px;
    }

    input {
      max-width: 805px;
      width: 100%;
      height: 50px;

      margin: 0 20px;
      padding: 0 20px;

      background: rgba(117, 117, 117, 0.48);
      border-radius: 8px;
      border: none;

      color: #ffffff;

      &,
      &::placeholder {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
      }

      &::placeholder {
        color: #eeeeeeaa;
      }
    }

    span {
      max-width: max-content;
      width: 100%;

      font-family: Roboto;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;

      color: #ffedeb;

      cursor: pointer;
    }
  }
`;
