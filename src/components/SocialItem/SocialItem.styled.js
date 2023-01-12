import styled from 'styled-components';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

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
