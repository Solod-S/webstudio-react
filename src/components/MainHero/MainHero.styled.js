import styled from 'styled-components';

import heroMobile from '../../images/hero-mobile.webp';
import heroMobile2x from '../../images/hero-mobile@2x.webp';
import heroMobile3x from '../../images/hero-mobile@3x.webp';
import heroTablet from '../../images/hero-tablet.webp';
import heroTablet2x from '../../images/hero-tablet@2x.webp';
import heroTablet3x from '../../images/hero-tablet@3x.webp';
import heroPc from '../../images/hero-pc.webp';
import heroPc2x from '../../images/hero-pc@2x.webp';
import heroPc3x from '../../images/hero-pc@3x.webp';

export const HeroSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #52535d;

  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    padding-top: 118px;
    padding-bottom: 118px;

    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${heroMobile});
    content: '';
    background-size: cover;
    background-repeat: no-repeat;
    max-width: ${p => p.theme.breakpoints.tell};
    @media screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${heroMobile2x});
    }
    @media screen and (min-resolution: 3dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${heroMobile3x});
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-top: 118px;
    padding-bottom: 118px;
    max-width: ${p => p.theme.breakpoints.tablet};
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${heroTablet});
    content: '';
    background-size: cover;
    background-repeat: no-repeat;
    @media screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${heroTablet2x});
    }
    @media screen and (min-resolution: 3dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${heroTablet3x});
    }
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    padding-top: 200px;
    padding-bottom: 200px;
    max-width: 1600px;
    background-size: cover;
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${heroPc});
    content: '';
    @media screen and (min-resolution: 2dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${heroPc2x});
    }
    @media screen and (min-resolution: 3dppx) {
      background-image: linear-gradient(
          to right,
          rgba(47, 48, 58, 0.4),
          rgba(47, 48, 58, 0.4)
        ),
        url(${heroPc3x});
    }
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: ${p => p.theme.fontSizes.m};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.superBolt};
  text-align: center;
  line-height: 1.4;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${p => p.theme.colors.primaryWhiteColor};
  @media screen and (min-width: ${p => p.theme.breakpoints.beeforeTell}) {
    font-size: ${p => p.theme.fontSizes.l};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    font-size: 44px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 0;

  color: ${p => p.theme.colors.primaryWhiteColor};
  background-color: ${p => p.theme.colors.primaryAccentColor};
  cursor: pointer;
  border: none;
  border-radius: ${p => p.theme.radii.normal};

  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: ${p => p.theme.fontSizes.xs};
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
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
