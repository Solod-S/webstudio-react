import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

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

export const SociaList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SociaItem = styled.li`
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 8px;
    }
  }
  @media screen and (min-width: 1200px) {
    :not(:last-child) {
      margin-right: 9px;
    }
  }
`;

export const SociaLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :focus {
    background-color: var(--primaryAccentColor);
  }
  :hover {
    background-color: var(--primaryAccentColor);
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;

  padding: 0;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Subscribe = styled.div`
  @media screen and (min-width: 1200px) {
    margin-left: 93px;
  }
  @media screen and (max-width: 1199px) {
    text-align: center;
  }
`;

export const SubscribeForm = styled.form``;

export const SubscribeTitle = styled.label`
  display: block;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--primaryWhiteColor);
`;

export const FormWrapper = styled.div`
  @media screen and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const EmailInput = styled.input`
  padding: 15px 16px;
  /* height: 50px; */
  background-color: transparent;

  font-size: 16px;
  line-height: calc(20 / 16);
  letter-spacing: 0.03em;
  color: rgba(255, 255, 255, 0.6);

  border: 1px solid rgba(255, 255, 255, 0.3);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 450px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1200px) {
    width: 358px;
  }
`;

export const EmailBtn = styled.button`
  display: inline-block;
  padding: 10px 0;
  color: var(--primaryWhiteColor);
  background-color: var(--primaryAccentColor);
  cursor: pointer;
  border: none;
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  line-height: calc(30 / 16);
  letter-spacing: 0.06em;
  font-family: inherit;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :focus {
    color: var(--primaryAccentColor);
    background-color: var(--primaryWhiteColor);
    fill: var(--primaryAccentColor);
  }
  :hover {
    color: var(--primaryAccentColor);
    background-color: var(--primaryWhiteColor);
    fill: var(--primaryAccentColor);
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 10px;
  }
`;

export const FacebookIcon = styled(FaFacebookF)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: var(--primaryWhiteColor);
  }
`;
export const TwitterIcon = styled(FaTwitter)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: var(--primaryWhiteColor);
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: var(--primaryWhiteColor);
  }
`;
export const LinkedinInIcon = styled(FaLinkedinIn)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${SociaLink}:hover & {
    fill: var(--primaryWhiteColor);
  }
`;
export const TelegramPlaneInIcon = styled(FaTelegramPlane)`
  margin-left: 9px;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  ${EmailBtn}:hover & {
    fill: var(--primaryAccentColor);
  }
`;
