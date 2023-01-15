import styled from 'styled-components';

export const Member = styled.li`
  background-color: ${p => p.theme.colors.primaryWhiteColor};
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    max-width: 450px;
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    margin-top: 30px;
    margin-left: 30px;
    width: 354px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    :not(:last-child) {
      margin-right: 30px;
    }

    width: 270px;
  }
`;

export const Avatar = styled.div`
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    position: relative;
    overflow: hidden;
  }
`;

export const AvatarImg = styled.img`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    width: 100%;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: block;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    width: 100%;
    max-height: 265px;
  }
`;

export const AvatarImgCover = styled.img`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    display: none;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(1) rotate(0deg);
    display: block;
    background-color: rgba(47, 48, 58, 0.4);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Description = styled.div`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    padding-bottom: 24px;
    padding-top: 30px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    padding-bottom: 30px;
    padding-top: 30px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 10px;
  font-weight: ${p => p.theme.fontWeight.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.2;
  letter-spacing: 0.03em;

  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: 0.03em;

  text-align: center;
`;

export const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
