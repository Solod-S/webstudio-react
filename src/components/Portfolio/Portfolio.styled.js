import styled from 'styled-components';

export const PortfolioList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    // flex-basis: calc(100% / 2-30px);
    flex-basis: calc(100% / 2);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc(100% / 2);
    // flex-basis: calc(100% / 3-30px);
    margin-top: -30px;
    margin-left: -30px;
  }
`;
