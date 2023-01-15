import styled from 'styled-components';

export const Image = styled.img`
  display: block;
`;

export const Title = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 70px;
  padding-top: 24px;
  padding-bottom: 24px;

  font-family: ${p => p.theme.fontFamily.roboto};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: calc(16 / 14);
  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;

  color: ${p => p.theme.colors.primaryWhiteColor};

  background: rgba(47, 48, 58, 0.8);
`;
