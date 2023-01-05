import {
  Footer,
  FooterWrapper,
  FlexWrapper,
  ContactWrapper,
  Logo,
  Address,
  Street,
  AdressList,
  AdressItem,
  AdressLink,
  SocialWrapper,
  SociaTitle,
  SociaList,
  SociaItem,
  SociaLink,
} from './Footer.styled';

function FooterBar() {
  return (
    <Footer id="footer">
      <FooterWrapper className="container">
        <FlexWrapper>
          <ContactWrapper>
            <Logo href="./index.html">
              <span className="accentColor">Web</span>Studio
            </Logo>
            <Address>
              <Street class="address__street">
                г. Киев, пр-т Леси Украинки, 26
              </Street>
              <AdressList>
                <AdressItem>
                  <AdressLink href="mailto:info@devstudio.com">
                    info@devstudio.com
                  </AdressLink>
                </AdressItem>
                <AdressItem>
                  <AdressLink href="tel:+380961111111">
                    +38 096 111 11 11
                  </AdressLink>
                </AdressItem>
              </AdressList>
            </Address>
          </ContactWrapper>
          <SocialWrapper>
            <SociaTitle>присоединяйтесь</SociaTitle>
            <SociaList>
              <SociaItem>
                <SociaLink
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg width="20px" height="20px" aria-label="Инстаграм">
                    <use href="./images/symbol-defs.svg#icon-instagram"></use>
                  </svg>
                </SociaLink>
              </SociaItem>
              <SociaItem>
                <SociaLink
                  href="https://twitter.com/?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg width="20px" height="20px" aria-label="Твиттер">
                    <use href="./images/symbol-defs.svg#icon-twitter"></use>
                  </svg>
                </SociaLink>
              </SociaItem>
              <SociaItem>
                <SociaLink
                  href="https://www.facebook.com//"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg width="20px" height="20px">
                    <use href="./images/symbol-defs.svg#icon-facebook"></use>
                  </svg>
                </SociaLink>
              </SociaItem>
              <SociaItem>
                <SociaLink
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg width="20px" height="20px" aria-label="ЛинкедИн">
                    <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                  </svg>
                </SociaLink>
              </SociaItem>
            </SociaList>
          </SocialWrapper>
        </FlexWrapper>
        <div class="subscribe">
          <form class="subscribe__form">
            <label class="subscribe__form-label" for="email">
              Подпишитесь на рассылку
            </label>
            <div class="subscribe__form-wrapper">
              <input
                class="subscribe__form-email-input"
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <button class="subscribe__form-email-button" type="submit">
                Подписаться
                <svg
                  class="subscribe__form-button-icon"
                  width="24px"
                  height="24px"
                >
                  <use href="./images/symbol-defs.svg#icon-telegram"></use>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </FooterWrapper>
    </Footer>
  );
}

export default FooterBar;
