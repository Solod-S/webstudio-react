import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Footer = styled.footer`
  background-color: var(--secondaryBgColor);
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 auto;
    font-style: normal;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FooterWrapper = styled.div`
  /* @media screen and (min-width: 768px) {
    // display: flex;
  } */
  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const FlexWrapper = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 60px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-around;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 60px;
  }
`;

export const ContactWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 60px;
  }
  /* @media screen and (min-width: 768px) {
    // margin-right: 165px;
  } */
`;

export const Logo = styled(NavLink)`
  @media screen and (min-width: 768px) {
    margin-right: 88px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
    margin-right: 90px;
  }
  margin-bottom: 20px;
  display: block;
  color: var(--primaryBgColor);

  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const Address = styled.address`
  font-style: normal;
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 0.03em;
  color: var(--primaryBgColor);
`;

export const Street = styled.p`
  color: var(--primaryBgColor);
  margin-bottom: 8px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 20px;
  }
`;

export const AdressList = styled.ul``;

export const AdressItem = styled.li`
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1200px) {
    :not(:last-child) {
      margin-bottom: 9px;
    }
  }
`;

export const AdressLink = styled.a`
  :focus {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  :hover {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  color: rgba(255, 255, 255, 0.6);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 1200px) {
    display: inline-block;
  }
`;

export const SocialWrapper = styled.div`
  @media screen and (min-width: 1200px) {
    margin-left: 70px;
  }
`;

export const SociaTitle = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: calc(16 / 14);
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: var(--primaryWhiteColor);
  @media screen and (max-width: 1199px) {
    text-align: center;
  }
`;

export const SociaList = styled.ul``;

export const SociaItem = styled.li`
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 8px;
    }
  }
  @media screen and (min-width: 1200px) {
    :not(:last-child) {
      margin-bottom: 9px;
    }
  }
`;

export const SociaLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  fill: var(--primaryWhiteColor);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  :hover {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--primaryWhiteColor);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  fill: var(--thrdBgColor);
  padding: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
