import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--primaryBgColor);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  margin-bottom: 30px;
  @media screen and (min-width: 1200px) {
    height: 120px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.1;
  letter-spacing: 0.03em;

  text-transform: uppercase;
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.7;
  letter-spacing: 0.03em;
`;
