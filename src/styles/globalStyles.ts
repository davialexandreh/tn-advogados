import { createGlobalStyle } from "styled-components";
import "leaflet/dist/leaflet.css";

const globalStyles = createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: none;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-style: normal;
    }

    button, a {
      cursor: pointer;
      text-decoration: none;
    }
`;

export default globalStyles;
