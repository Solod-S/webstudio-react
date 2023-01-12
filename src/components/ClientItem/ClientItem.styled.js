import styled from 'styled-components';
import { FaFacebookF } from 'react-icons/fa';

export const Client = styled.li`
  @media screen and (max-width: 767px) {
    margin-left: 30px;
    margin-top: 30px;
  }

  @media screen and (max-width: 1199px) {
    margin-left: 30px;
    margin-top: 30px;
  }
  @media screen and (min-width: 1200px) {
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
  border: 1px solid var(--thrdBgColor);
  border-radius: 4px;
  fill: var(--thrdBgColor);
  @media screen and (min-width: 480px) {
    width: 210px;
    height: 92px;
  }
  @media screen and (min-width: 768px) {
    width: 226px;
    height: 92px;
  }
  @media screen and (min-width: 1200px) {
    width: 170px;
    height: 92px;
  }
`;

export const Icon = styled(FaFacebookF)`
  size: 22px;
  color: 'black';
`;
