import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${p => p.theme.colors.primaryBgColor};
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;

  @media screen and (min-width: 768px) {
    margin-bottom: 50px;
    font-size: 36px;
    letter-spacing: 0.03em;
  }
`;

export const MemberList = styled.ul`
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2 - 30px);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;
