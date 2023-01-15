import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import '@csstools/normalize.css';

export const GlobalStyle = createGlobalStyle`



:root {
  /* // -------------COLORS-------------- */


 /* --primaryAccentColor: #2196f3; */
  /* --primaryWhiteColor: #ffffff; */
  /* --primaryBlackColor: #000000; */
  /* --primaryTextColor: #757575; */
  /* --primaryTitleColor: #212121; */
  /* --primaryBgColor: #f5f4fa; */
  /* --secondaryBgColor: #2f303a; */
  /* --thrdBgColor: #afb1b8; */
  /* --labelColor: #757575; */

  /* --primaryAccentColor: #2196f3;
  --primaryWhiteColor: #ffffff;
  --primaryBlackColor: #000000;
  --primaryTextColor: #757575;
  --primaryTitleColor: #212121;
  --primaryBgColor: #f5f4fa;
  --secondaryBgColor: #2f303a;
  --thrdBgColor: #afb1b8;
  --labelColor: #757575; */

  /* // -------------BREAKPOINTS-------------- */

  /* --breakpointBeeforeTell: 479px; */
  /* --breakpointTell: 480px; */
  /* --breakpointBeeforeTablet: 767px; */
  /* --breakpointTablet: 768px; */
  /* --breakpointBeeforeDesktop: 1199px; */
  /* --breakpointDesktop: 1200px; */
}
.--mobile-modificator {
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    color: ${p => p.theme.colors.primaryAccentColor};
    }
}
h1,
h2,
h3,
h4 {
  color: ${p => p.theme.colors.primaryTitleColor};
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
  margin: 0;
  background-color:  ${p => p.theme.colors.primaryWhiteColor};
  color: ${p => p.theme.colors.primaryTextColor};

  font-family: ${p => p.theme.fontFamily.roboto};
  scroll-behavior: smooth;
}

.img {
  display: block;
  max-width: 100%;
  height: auto;
}
.container {
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${p => p.theme.breakpoints.tell}) {
    width: ${p => p.theme.breakpoints.tell};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: ${p => p.theme.breakpoints.tablet};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: ${p => p.theme.breakpoints.desktop};
  }
}

.section {
  padding-top: ${p => p.theme.space[6]}px;
  padding-bottom: ${p => p.theme.space[6]}px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-top: ${p => p.theme.space[6]}px;
    padding-bottom: ${p => p.theme.space[6]}px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    padding-top: ${p => p.theme.space[7]}px;
    padding-bottom: ${p => p.theme.space[7]}px;
  }
}

.accentColor {
    color: ${p => p.theme.colors.primaryAccentColor};
  }

.--isOpen {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  transform: translateX(0%);
  background-color:  ${p => p.theme.colors.primaryWhiteColor};
  width: 100%;
  height: 100%;
  padding: 25px;


  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: contents;
  }
}
.no-scroll {
  overflow: hidden;
}
`;
