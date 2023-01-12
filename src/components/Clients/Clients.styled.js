import styled from 'styled-components';

export const Clients = styled.section``;

export const Wrapper = styled.div``;

export const Title = styled.h3`
  color: $primaryTitleColor;
  font-weight: 700;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: 28px;

  @media screen and (min-width: 1199px) {
    margin-bottom: 50px;
    font-size: 36px;
  }
`;

export const ClientsList = styled.ul`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    flex-basis: calc(100% / 2 - 30px);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (max-width: 1200px) {
    flex-basis: calc(100% / 3 - 60px);
    flex-wrap: wrap;
    margin-top: -30px;
    margin-left: -30px;
  }
`;
