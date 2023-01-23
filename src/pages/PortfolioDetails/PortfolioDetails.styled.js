import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  width: 118px;
  color: ${p => p.theme.colors.primaryAccentColor};
  margin-bottom: 20px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  ::after {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.colors.primaryAccentColor};
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition-property: opacity;
    /* @include transitioned; */
  }
  &:hover::after {
    opacity: 1;
  }
`;

export const Main = styled.main`
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (min-width: 1200px) {
    padding-top: 95px;
    padding-bottom: 95px;
  }
`;

export const Section = styled.div`
  margin-bottom: 30px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 45px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;

export const Info = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1200px) {
    width: 1170px;
  }
`;

export const ImgWrapper = styled.div`
  min-width: 300px;
`;

export const Image = styled.img`
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  line-height: 1.5;
  :not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 30px;
  }
`;
