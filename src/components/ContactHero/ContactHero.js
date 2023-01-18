import { ContactSection, Title, Video, Button } from './ContactHero.styled';
import backraundvido from '../../video/video_hero.mp4';

function ContactHero({ openModal, isOpen }) {
  return (
    <ContactSection isOpen={isOpen}>
      <Title isOpen={isOpen}>
        Разработка дизайна <br />
        под ключ
      </Title>

      <Video autoPlay muted loop>
        <source src={backraundvido} type="video/mp4" />
      </Video>

      <Button isOpen={isOpen} onClick={() => openModal()}>
        Заказать
      </Button>
    </ContactSection>
  );
}
export default ContactHero;
