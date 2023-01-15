import styled from 'styled-components';

export const Clients = styled.section``;

export const Wrapper = styled.div``;

export const Title = styled.h3`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: ${p => p.theme.fontWeight.bolt};
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.xxl};

  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    margin-bottom: 50px;
    font-size: ${p => p.theme.fontSizes.xxxl};
  }
`;

export const ClientsList = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    flex-wrap: wrap;
    flex-basis: calc(100% / 2 - 30px);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (max-width:  ${p => p.theme.breakpoints.desktop}) {
    flex-basis: calc(100% / 3 - 60px);
    flex-wrap: wrap;
    margin-top: -30px;
    margin-left: -30px;
  }
`;
