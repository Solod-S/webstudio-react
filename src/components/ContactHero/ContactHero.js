import { ContactSection, Title, Video, Button } from './ContactHero.styled';
import backraundvido from '../../video/video_hero.mp4';

function ContactHero() {
  return (
    <ContactSection>
      <Title>
        Разработка дизайна <br />
        под ключ
      </Title>

      <Video
        // src="../../video/video_hero.mp4"
        autoPlay
        muted
        loop
      >
        <source src={backraundvido} type="video/mp4" />
      </Video>

      <Button data-modal-open>Заказать</Button>
    </ContactSection>
  );
}
export default ContactHero;
