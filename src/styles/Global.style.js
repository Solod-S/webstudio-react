import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import '@csstools/normalize.css';
export const GlobalStyle = createGlobalStyle`
h1,
h2,
h3,
h4 {
  color: $primaryTitleColor;
}

h1,
h2,
h3,
h4,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

body {
  background-color: $primaryWhiteColor;
  color: $primaryTextColor;

  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

.img {
  display: block;
  max-width: 100%;
  height: auto;
}
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: $breakpointTell) {
    width: $breakpointTell;
  }
  @media screen and (min-width: $breakpointTablet) {
    width: $breakpointTablet;
  }
  @media screen and (min-width: $breakpointDesktop) {
    width: $breakpointDesktop;
  }
}

.section {
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 94px;
    padding-bottom: 94px;
  }
}

`;
