import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0 20px;
  background-color: #022754;
  color: #fff;

  .titleWhite {
    color: #fff;
    text-align: center;
  }

  .socialDiv {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .iconAdress,
  .iconEmail {
    max-height: 50px;
    transition: 0.5s all ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }

  .iconMediaSocial {
    margin-right: 7px;
    transition: 0.5s all ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }

  .copy {
    text-align: center;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #fff;
  color: #022754;
  padding: 40px;
  border-radius: 8px;

  margin: 20px auto;

  h2 {
    margin: 0;
  }

  div {
    margin-bottom: 10px;
    text-align: left;

    input,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    span {
      color: red;
      font-size: 10px;
    }
  }

  button {
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    font-size: 25px;
    color: white;
    background-color: #022754;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.5s all ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
