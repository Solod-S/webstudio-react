import {
  Header,
  Navigation,
  Logo,
  MobileBtn,
  MenuWrapper,
  Menu,
  MenuList,
  MenuItem,
  MenuLink,
  ContactList,
  ContactItem,
  ContactLink,
  SocialMobile,
  SocialMobileItem,
  SocialMobileLink,
} from './AppBar.styled';

function AppBar() {
  return (
    <Header>
      <Navigation className="container">
        <Logo to="/">
          <span className="accentColor">Web</span>Studio
        </Logo>
        <MobileBtn
          class="mobile-btn"
          type="button"
          aria-expanded="false"
          data-menu-button
        >
          {/* <svg
            class="mobile-btn__svg"
            width="40px"
            height="40px"
            aria-label="menu"
          >
            <use
              class="mobile-btn__icon-close"
              href="./images/symbol-defs.svg#icon-mobile-close"
            ></use>
            <use
              class="mobile-btn__icon-menu"
              href="./images/symbol-defs.svg#icon-mobile-menu"
            ></use>
          </svg> */}
        </MobileBtn>
        <MenuWrapper data-menu>
          <Menu>
            <MenuList>
              <MenuItem>
                <MenuLink href="./index.html">Студия</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="./portfolio.html">Портфолио</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink href="./contact.html">Контакты</MenuLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <ContactList>
            <ContactItem>
              <ContactLink href="mailto:info@devstudio.com">
                {/* <svg
                  class="navigation__icon navigation__icon--tablet-mail"
                  width="16px"
                  height="12px"
                  aria-label="Почта"
                >
                  <use href="./images/symbol-defs.svg#icon-mailto"></use>
                </svg> */}
                info@devstudio.com
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactLink
                className="--mobile-modificator"
                href="tel:+380961111111"
              >
                {/* <svg
                  class="navigation__icon navigation__icon--tablet-tell"
                  width="10px"
                  height="16px"
                  aria-label="Телефон"
                >
                  <use href="./images/symbol-defs.svg#icon-tellto"></use>
                </svg> */}
                +38 096 111 11 11
              </ContactLink>
            </ContactItem>
          </ContactList>
          <SocialMobile>
            <SocialMobileItem>
              <SocialMobileLink
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Instagram
              </SocialMobileLink>
            </SocialMobileItem>
            <SocialMobileItem>
              <SocialMobileLink
                href="https://twitter.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </SocialMobileLink>
            </SocialMobileItem>
            <SocialMobileItem>
              <aSocialMobileLink
                href="https://www.facebook.com//"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Facebook
              </aSocialMobileLink>
            </SocialMobileItem>
            <SocialMobileItem>
              <SocialMobileLink
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LinkedIn
              </SocialMobileLink>
            </SocialMobileItem>
          </SocialMobile>
        </MenuWrapper>
      </Navigation>
    </Header>
  );
}

export default AppBar;
