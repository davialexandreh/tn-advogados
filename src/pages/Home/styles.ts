import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;

  .bannerHome {
    width: 100%;
  }

  h2 {
    color: #022754;
    font-weight: 800;
    font-size: 60px;
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
    font-size: 27px;
    height: 300px;
    width: 700px;
  }

  img {
    height: 400px;
    border-radius: 15px;
    box-shadow: 5px 5px 20px -1px #555;
  }

  span {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: bold;
    color: #022754;
  }
`;

export const ContentMissionVisionValues = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  max-width: 100vw;
  padding: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    font-size: 27px;
  }
`;
