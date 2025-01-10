import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;

  .bannerHome {
    width: 100%;
  }

  h2 {
    color: #022754;
    font-weight: 900;
    text-align: center;
    margin: 30px 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 30px;
  margin: 0 auto;
  margin-bottom: 80px;

  p {
    text-align: justify;
    width: 40vw;
  }

  img {
    max-height: 50vh;
    max-width: 50vw;
    border-radius: 15px;
    box-shadow: 5px 5px 20px -1px #555;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
    color: #022754;
  }

  @media (max-width: 1120px) {
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      width: 70vw;
    }
  }
`;
