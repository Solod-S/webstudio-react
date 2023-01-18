import styled from 'styled-components';

export const Client = styled.li`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    margin-left: 30px;
    margin-top: 30px;
  }

  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    margin-left: 30px;
    margin-top: 30px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    :not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const Link = styled.a`
  width: 130px;
  height: 92px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1000ms cubic-bezier(0.4, 0, 0.2, 1),
    border 250ms cubic-bezier(0.4, 0, 0.2, 1),
    fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
  /* border: 1px solid ${p => p.theme.colors.thrdBgColor}; */
  border-radius: ${p => p.theme.radii.normal};
  fill: ${p => p.theme.colors.thrdBgColor};
  @media screen and (min-width: ${p => p.theme.breakpoints.tell}) {
    width: 210px;
    height: 92px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 226px;
    height: 92px;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.desktop}) {
    width: 170px;
    height: 92px;
  }
`;

export const Icon = styled.img`
  object-fit: cover;
  width: 130px;
  @media screen and (min-width: ${p => p.theme.breakpoints.tell}) {
    width: 170px;
  }
`;
