import {
  FacebookIcon,
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
  Subscribe,
  SubscribeForm,
  SubscribeTitle,
  FormWrapper,
  EmailInput,
  EmailBtn,
  TwitterIcon,
  InstagramIcon,
  LinkedinInIcon,
  TelegramPlaneInIcon,
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
                  <InstagramIcon size={20} color="white" />
                </SociaLink>
              </SociaItem>
              <SociaItem>
                <SociaLink
                  href="https://twitter.com/?lang=ru"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <TwitterIcon size={20} color="white" />
                </SociaLink>
              </SociaItem>
              <SociaItem>
                <SociaLink
                  href="https://www.facebook.com//"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <FacebookIcon size={20} color="white" />
                </SociaLink>
              </SociaItem>
              <SociaItem>
                <SociaLink
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <LinkedinInIcon size={20} color="white" />
                </SociaLink>
              </SociaItem>
            </SociaList>
          </SocialWrapper>
        </FlexWrapper>
        <Subscribe>
          <SubscribeForm>
            <SubscribeTitle for="email">Подпишитесь на рассылку</SubscribeTitle>
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
