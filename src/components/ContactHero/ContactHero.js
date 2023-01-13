function ContactHero() {
  return (
    <section class="hero-contact">
      <h1 class="hero-contact__title">
        Разработка дизайна <br />
        под ключ
      </h1>

      <video
        class="hero-contact__video"
        src="./video/video_hero.mp4"
        autoplay
        muted
        loop
        type="video/mp4"
      ></video>

      <button class="hero-contact__button" data-modal-open>
        Заказать
      </button>
    </section>
  );
}
export default ContactHero;
