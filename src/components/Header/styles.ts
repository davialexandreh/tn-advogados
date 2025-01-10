import styled from "styled-components";

export const Container = styled.div`
  background-color: #022754;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  width: 100vw;
  z-index: 4;

  img {
    width: 90px;
  }

  ul {
    display: flex;
    gap: 20px;
    margin-right: 20px;
    list-style: none;

    li {
      a {
        color: white;
        text-decoration: none;
        transition: opacity 0.5s ease-in-out;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 15px;
    width: 25px;
    height: 20px;
    cursor: pointer;
    background: none;
    border: none;

    .bar {
      height: 3px;
      width: 100%;
      background-color: white;
      border-radius: 5px;
      transition: all 0.5s ease-in-out;
    }

    &.open .bar:nth-child(1) {
      transform: rotate(45deg) translateY(8px);
    }

    &.open .bar:nth-child(2) {
      opacity: 0;
    }

    &.open .bar:nth-child(3) {
      transform: rotate(-45deg) translateY(-8px);
    }
  }

  @media (max-width: 768px) {
    .menu {
      visibility: hidden;
      transform: translateX(100%);
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: -20px;
      background-color: #022754;
      padding: 10px 20px;
      width: 40%;
      height: 100vh;
      transition: all 0.9s ease-in-out;

      li {
        margin: 10px 0;
      }

      &.show {
        visibility: visible;
        transform: translateX(60%);
        transform: translateX(0);
      }
    }
    .hamburger {
      display: flex;
    }
  }
`;
