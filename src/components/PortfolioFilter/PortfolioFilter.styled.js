import styled from 'styled-components';

export const BtnSet = styled.ul`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    flex-basis: calc(100% / 3 - 16px);
    margin-right: -8px;
    margin-top: -8px;
  }
  justify-content: center;
  margin-bottom: 50px;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 8px;
  }
  @media screen and (max-width: 767px) {
    margin-right: 8px;
    margin-top: 8px;
  }
`;

export const Button = styled.button`
  :hover {
    background-color: var(--primaryAccentColor);
    color: var(--primaryWhiteColor);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }
  :focus {
    background-color: var(--primaryAccentColor);
    color: var(--primaryWhiteColor);
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
  }

  padding: 6px 22px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.03em;
  font-family: inherit;
  background-color: var(--primaryBgColor);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    outline: none;
  }
`;