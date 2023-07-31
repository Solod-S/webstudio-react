import { ContactSection, Title, Video, Button } from './ContactHero.styled';
import backraundvido from '../../video/video_hero.mp4';

function ContactHero({ openModal, isOpen }) {
  return (
    <ContactSection isOpen={isOpen}>
      <Title isOpen={isOpen}>
        Design Development <br />
        from scratch
      </Title>

      <Video autoPlay muted loop>
        <source src={backraundvido} type="video/mp4" />
      </Video>

      <Button isOpen={isOpen} onClick={() => openModal()}>
        Place an order
      </Button>
    </ContactSection>
  );
}
export default ContactHero;
