import styled from "styled-components";

export const Container = styled.div`
  background-color: #022754;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100vw;
  z-index: 4;

  img {
    width: 90px;
  }

  div {
    display: flex;
    justify-content: center;
    margin-right: 40px;
    gap: 15px;
  }

  .header-link {
    font-size: 20px;
    color: #fff;
    transition: 0.5s all ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
;`