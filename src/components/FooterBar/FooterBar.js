import SocialItem from 'components/SocialItem/SocialItem';
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
  Subscribe,
  SubscribeForm,
  SubscribeTitle,
  FormWrapper,
  EmailInput,
  EmailBtn,
  TelegramPlaneInIcon,
} from './FooterBar.styled';

import socialItems from 'data/socialItems';

function FooterBar() {
  return (
    <Footer>
      <FooterWrapper className="container">
        <FlexWrapper>
          <ContactWrapper>
            <Logo href="./index.html">
              <span className="accentColor">Web</span>Studio
            </Logo>
            <Address>
              <Street>г. Киев, пр-т Леси Украинки, 26</Street>
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
              {socialItems.length > 0 &&
                socialItems.map(({ link, icon, id }) => (
                  <SocialItem key={id} link={link} icon={icon} />
                ))}
            </SociaList>
          </SocialWrapper>
        </FlexWrapper>
        <Subscribe>
          <SubscribeForm>
            <SubscribeTitle htmlFor="email">
              Подпишитесь на рассылку
            </SubscribeTitle>
            <FormWrapper>
              <EmailInput
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
              <EmailBtn type="submit">
                Подписаться
                <TelegramPlaneInIcon size={24} color="white" />
              </EmailBtn>
            </FormWrapper>
          </SubscribeForm>
        </Subscribe>
      </FooterWrapper>
    </Footer>
  );
}

export default FooterBar;
