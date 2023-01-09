import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (max-width: 1199px) {
    display: none;
  }
  display: flex;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 0.03em;

  margin-bottom: 50px;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  :not(:last-child) {
    margin-right: 30px;
  }
  position: relative;
`;
