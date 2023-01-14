import styled from 'styled-components';

export const ContactSection = styled.section`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  :after {
    position: absolute;
    z-index: 2;

    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    background-color: rgba(47, 48, 58, 0.4);
  }
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1600px;
  }
`;

export const Title = styled.h1`
  position: absolute;
  z-index: 3;
  top: 17%;
  left: 50%;
  transform: translatex(-50%);

  font-size: 15px;
  font-style: normal;
  font-weight: 900;

  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primaryWhiteColor};
  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeTell}) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 33px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 44px;
  }
`;

export const Video = styled.video`
  display: block;
  width: 100%;
  z-index: 1;
`;

export const Button = styled.button`
  position: absolute;
  z-index: 3;
  bottom: 14%;
  left: 50%;
  transform: translatex(-50%);
  padding: 10px 0;

  color: ${p => p.theme.colors.primaryWhiteColor};
  background-color: ${p => p.theme.colors.primaryAccentColor};
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
    color: ${p => p.theme.colors.primaryAccentColor};
    background-color: ${p => p.theme.colors.primaryWhiteColor};
  }
  :hover {
    color: ${p => p.theme.colors.primaryAccentColor};
    background-color: ${p => p.theme.colors.primaryWhiteColor};
  }

  @media screen and (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1200px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
