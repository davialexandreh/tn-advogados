import { createGlobalStyle } from "styled-components";
import "leaflet/dist/leaflet.css";

const globalStyles = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth;
  }

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    button, a, p, span, input, textarea {
      cursor: pointer;
      text-decoration: none;
      font-size: clamp(1rem, 2.5vw, 1.5rem);
    }

    h2 {
      font-size: clamp(1.5rem, 4vw, 3rem);
    }
`;

export default globalStyles;
