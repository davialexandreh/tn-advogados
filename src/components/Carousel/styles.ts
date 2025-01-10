import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .carousel-container {
    width: 100%;
  }

  .carousel-item {
    padding: 10px;
  }

  .iconsMissionVisionValues {
    width: 90px;
  }

  p {
    background-color: #022754;
    color: #fff;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
  }

  @media (max-width: 1220px) {
    p {
      width: 80%;
    }
  }
`;
