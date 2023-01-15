import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.primaryBgColor};
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: ${p => p.theme.fontSizes.xxl};
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;

  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes.xxxl};
    letter-spacing: 0.03em;
  }
`;

export const MemberList = styled.ul`
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2 - 30px);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;
