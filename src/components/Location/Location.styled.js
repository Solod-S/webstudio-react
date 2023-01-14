import styled from 'styled-components';

export const LocationSection = styled.section`
  background-color: ${p => p.theme.colors.primaryBgColor};
  @media screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: 700;
  line-height: 42px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: 28px;

  @media screen and (min-width: 1199px) {
    margin-bottom: 50px;
    font-size: 36px;
  }
`;

export const GoogleLink = styled.iframe`
  margin-bottom: 50px;
`;

export const WorkingTime = styled.h3`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 30px;
  font-size: 28px;

  @media screen and (min-width: 1199px) {
    margin-bottom: 50px;
    font-size: 36px;
  }
`;

export const WorkingContacts = styled.h3`
  color: ${p => p.theme.colors.primaryTitleColor};
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.03em;
  margin-bottom: 22px;
  font-size: 28px;

  @media screen and (min-width: 1199px) {
    margin-bottom: 12px;
    font-size: 22px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;
