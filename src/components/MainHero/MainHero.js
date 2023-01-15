import { HeroSection, Title, Button } from './MainHero.styled';

function MainHero({openModal}) {
  return (
    <>
      <HeroSection>
        <Title>
          Эффективные решения <br />
          для вашего бизнеса
        </Title>
        <Button onClick={()=> openModal()}>Заказать услугу</Button>
      </HeroSection>
    </>
  );
}

export default MainHero;
