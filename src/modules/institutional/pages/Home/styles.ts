import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 80px 30px;
`;

export const PlataformSlug = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  margin: 85px 0;

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;

    text-align: center;

    color: var(--master-color);
  }
`;

export const PetsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 1200px;
  width: 100%;

  gap: 20px;
`;

export const PetsSlider = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;

    margin-bottom: 22px;

    color: var(--master-color);
  }

  .pets {
    display: flex;
    gap: 20px;

    flex-wrap: wrap;
  }
`;
