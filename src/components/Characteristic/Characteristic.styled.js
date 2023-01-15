import styled from 'styled-components';

export const Section = styled.section`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    display: none;
  }
  display: flex;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    display: none;
  }
`;

export const Title = styled.h2`
  font-weight: ${p => p.theme.fontWeight.bolt};
  font-size: ${p => p.theme.fontSizes.xxxl};
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
