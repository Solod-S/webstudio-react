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
  SmartPhoneIcon,
  MailInIcon,
} from './AppBar.styled';

import socialMobile from 'data/socialMobile';
import SocialMobileEl from 'components/SocialMobileItem/SocialMobileItem';

function AppBar() {
  return (
    <Header>
      <Navigation className="container">
        <Logo to="/">
          <span className="accentColor">Web</span>Studio
        </Logo>
        <MobileBtn type="button" aria-expanded="false"></MobileBtn>
        <MenuWrapper>
          <Menu>
            <MenuList>
              <MenuItem>
                <MenuLink to="/">Студия</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="portfolio">Портфолио</MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink to="contacts">Контакты</MenuLink>
              </MenuItem>
            </MenuList>
          </Menu>
          <ContactList>
            <ContactItem>
              <ContactLink href="mailto:info@devstudio.com">
                <MailInIcon size={16} color="black" />
                info@devstudio.com
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <ContactLink
                className="--mobile-modificator"
                href="tel:+380961111111"
              >
                <SmartPhoneIcon size={16} color="black" />
                +38 096 111 11 11
              </ContactLink>
            </ContactItem>
          </ContactList>
          <SocialMobile>
            {socialMobile.length > 0 &&
              socialMobile.map(({ id, link }) => (
                <SocialMobileItem key={id}>
                  <SocialMobileEl link={link} />
                </SocialMobileItem>
              ))}
          </SocialMobile>
        </MenuWrapper>
      </Navigation>
    </Header>
  );
}

export default AppBar;
