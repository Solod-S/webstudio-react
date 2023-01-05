import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  @media screen and (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 21px;
    padding-bottom: 21px;
  }

  @media screen and (min-width: 1200px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
  border-bottom: 1px solid #ececec;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  @media screen and (min-width: 768px) {
    margin-right: 88px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 26px;
    margin-right: 90px;
  }
  color: var(--primaryBlackColor);

  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 0.03em;
`;

export const MobileBtn = styled.button`
  @media screen and (min-width: 768px) {
    display: none;
  }
  margin-left: auto;
  z-index: 5;
`;

export const MenuWrapper = styled.div`
  @media screen and (max-width: 479px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    transform: translateX(-120%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--primaryWhiteColor);
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    padding: 48px 40px;
    transform: translateX(-100%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--primaryWhiteColor);
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media screen and (min-width: 1200px) {
    display: contents;
  }
  overflow-y: auto;
  transition: transform 250ms linear;
`;

export const Menu = styled.nav`
  @media screen and (max-width: 767px) {
    margin-bottom: auto;
  }
  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    padding: 0;
  }
`;

export const MenuList = styled.ul`
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
  display: flex;
`;

export const MenuItem = styled.li`
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media screen and (min-width: 768px) {
    position: relative;
    :not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const MenuLink = styled(NavLink)`
  :focus {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  :hover {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  font-weight: 500;
  line-height: 1.1;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--primaryTitleColor);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (max-width: 479px) {
    font-size: 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: 40px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
    padding: 30px 0;
  }
`;

export const ContactList = styled.ul`
  @media screen and (max-width: 767px) {
    flex-direction: column;
    flex-direction: column-reverse;
    margin-bottom: 64px;
  }
  @media screen and (min-width: 768px) {
    margin-left: auto;
    flex-direction: column;
  }
  @media screen and (min-width: 1200px) {
    margin-left: auto;
    flex-direction: row;
    align-items: center;
  }
  display: flex;
`;

export const ContactItem = styled.li`
  @media screen and (max-width: 767px) {
    :not(:last-child) {
      margin-bottom: 32px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
  @media screen and (min-width: 1200px) {
    position: relative;
    :not(:last-child) {
      margin-right: 50px;
    }
  }
`;

export const ContactLink = styled.a`
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.02em;
  color: var(--primaryTitleColor);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
  :hover {
    color: var(--primaryAccentColor);
    fill: var(--primaryAccentColor);
  }
`;

export const SocialMobile = styled.ul`
  display: none;
  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export const SocialMobileItem = styled.li`
  @media screen and (max-width: 479px) {
    :not(:last-child) {
      margin-right: 3px;
    }
  }
  @media screen and (min-width: 479px) {
    :not(:last-child) {
      margin-right: 10px;
    }
  }
  :not(:last-child)::after {
    border: 1px solid rgba(33, 33, 33, 0.2);
    transform: rotate(90deg);
    content: '';
    @media screen and (max-width: 479px) {
      margin-left: 5px;
    }
    @media screen and (min-width: 480px) {
      margin-left: 9px;
    }
  }
`;

export const SocialMobileLink = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: var(--primaryAccentColor);
`;
