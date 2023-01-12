import styled from 'styled-components';

export const Member = styled.li`
  background-color: var(--primaryWhiteColor);
  border-radius: 0px 0px 4px 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px) {
    max-width: 450px;
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    margin-top: 30px;
    margin-left: 30px;
    width: 354px;
  }
  @media screen and (min-width: 1200px) {
    :not(:last-child) {
      margin-right: 30px;
    }

    width: 270px;
  }
`;

export const Avatar = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
    overflow: hidden;
  }
`;

export const AvatarImg = styled.img`
  @media screen and (max-width: 1199px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 1200px) {
    width: 100%;
    max-height: 265px;
  }
`;

export const AvatarImgCover = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
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
  @media screen and (max-width: 1199px) {
    padding-bottom: 24px;
    padding-top: 30px;
  }
  @media screen and (min-width: 1200px) {
    padding-bottom: 30px;
    padding-top: 30px;
  }
`;

export const Name = styled.h3`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
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
