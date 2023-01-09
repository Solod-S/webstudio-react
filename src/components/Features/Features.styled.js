import styled from 'styled-components';

export const Section = styled.section``;

export const FeaturesSection = styled.div`
  @media screen and (max-width: 1199px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 94px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
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

export const Item = styled.li`
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 354px;
    margin-top: 30px;
    margin-left: 30px;
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
  }
`;
