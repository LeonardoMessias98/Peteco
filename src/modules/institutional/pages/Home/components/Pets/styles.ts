import styled from "styled-components";

export const Container = styled.div`
  figure {
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;

    &,
    img {
      width: 240px;
      height: 140px;
    }

    img {
      transition: transform 0.6s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;

    max-width: 238px;
    width: 100%;

    color: #757575;

    margin: 13px 0;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 40px;
    height: 40px;
  }

  button {
    background: 0;
    border: 0;
    outline: 0;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;

    color: var(--master-color);

    margin: 3px 0;

    transition: transform 0.4s;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;
