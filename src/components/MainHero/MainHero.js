import { HeroSection, Title, Button } from './MainHero.styled';

function MainHero({ openModal }) {
  return (
    <>
      <HeroSection>
        <Title>
          EFFECTIVE SOLUTIONS <br />
          FOR YOUR BUSINESS
        </Title>
        <Button onClick={() => openModal()}>Place an order</Button>
      </HeroSection>
    </>
  );
}

export default MainHero;
