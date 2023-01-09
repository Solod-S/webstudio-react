import {
  Section,
  Title,
  MemberList,
  MemberItem,
  Avatar,
  AvatarImg,
  AvatarImgCover,
  Description,
  Name,
  Text,
  Social,
} from './Team.styled';

function Team() {
  return (
    <Section className="section">
      <div className="container">
        <Title>Наша команда</Title>
        <MemberList>
          <MemberItem>
            <Avatar class="avatar">
              <AvatarImg
                src={require('../../images/igor-mobile@3x.jpg')}
                alt="Игорь"
                width="270"
              />

              <AvatarImgCover
                src={require('../../images/igor-mobile@3x.jpg')}
                alt="Игорь"
                width="270"
              />
            </Avatar>
            <Description>
              <Name>Игорь Демьяненко</Name>
              <Text class="dscr__text" lang="en">
                Product Designer
              </Text>
              <ul class="social">
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Инстаграм">
                      <use href="./images/symbol-defs.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://twitter.com/?lang=ru"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Твиттер">
                      <use href="./images/symbol-defs.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.facebook.com//"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px">
                      <use href="./images/symbol-defs.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="ЛинкедИн">
                      <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </Description>
          </MemberItem>
          <MemberItem class="team__member-item">
            <Avatar class="avatar">
              <picture>
                <source
                  srcset="
                      ./images/olga-desktop.webp    1x,
                      ./images/olga-desktop@2x.webp 2x,
                      ./images/olga-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/olga-table.webp    1x,
                      ./images/olga-table@2x.webp 2x,
                      ./images/olga-table@3x.webp 3x
                    "
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/olga-mobile.webp    1x,
                      ./images/olga-mobile@2x.webp 2x,
                      ./images/olga-mobile@3x.webp 3x
                    "
                  media="(min-width: 320px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/olga-desktop.webp    1x,
                      ./images/olga-desktop@2x.webp 2x,
                      ./images/olga-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/olga-table.jpg    1x,
                      ./images/olga-table@2x.jpg 2x,
                      ./images/olga-table@3x.jpg 3x
                    "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                      ./images/olga-mobile.jpg    1x,
                      ./images/olga-mobile@2x.jpg 2x,
                      ./images/olga-mobile@3x.jpg 3x
                    "
                  media="(min-width: 320px)"
                />
                <img
                  class="avatar__img"
                  src="./images/olga-mobile@3x.jpg"
                  alt="ольга"
                  width="270"
                />
              </picture>

              <picture>
                <source
                  srcset="
                      ./images/olga-desktop.webp    1x,
                      ./images/olga-desktop@2x.webp 2x,
                      ./images/olga-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/olga-table.webp    1x,
                      ./images/olga-table@2x.webp 2x,
                      ./images/olga-table@3x.webp 3x
                    "
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/olga-mobile.webp    1x,
                      ./images/olga-mobile@2x.webp 2x,
                      ./images/olga-mobile@3x.webp 3x
                    "
                  media="(min-width: 320px)"
                  type="image/webp"
                />

                <source
                  srcset="
                      ./images/olga-desktop.jpg    1x,
                      ./images/olga-desktop@2x.jpg 2x,
                      ./images/olga-desktop@3x.jpg 3x
                    "
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                      ./images/olga-table.jpg    1x,
                      ./images/olga-table@2x.jpg 2x,
                      ./images/olga-table@3x.jpg 3x
                    "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                      ./images/olga-mobile.jpg    1x,
                      ./images/olga-mobile@2x.jpg 2x,
                      ./images/olga-mobile@3x.jpg 3x
                    "
                  media="(min-width: 320px)"
                />
                <img
                  class="avatar__img--base"
                  src="./images/olga-mobile@3x.jpg"
                  alt="ольга"
                  width="270"
                />
              </picture>
            </Avatar>
            <div class="dscr">
              <h3 class="dscr__name">Ольга Репина</h3>
              <p class="dscr__text" lang="en">
                Frontend Developer
              </p>
              <ul class="social">
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Инстаграм">
                      <use href="./images/symbol-defs.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://twitter.com/?lang=ru"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Твиттер">
                      <use href="./images/symbol-defs.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.facebook.com//"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Фейсбук">
                      <use href="./images/symbol-defs.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="ЛинкедИн">
                      <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </MemberItem>
          <MemberItem class="team__member-item">
            <Avatar class="avatar">
              <picture>
                <source
                  srcset="
                      ./images/nikola-desktop.webp    1x,
                      ./images/nikola-desktop@2x.webp 2x,
                      ./images/nikola-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/nikola-table.webp    1x,
                      ./images/nikola-table@2x.webp 2x,
                      ./images/nikola-table@3x.webp 3x
                    "
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/nikola-mobile.webp    1x,
                      ./images/nikola-mobile@2x.webp 2x,
                      ./images/nikola-mobile@3x.webp 3x
                    "
                  media="(min-width: 320px)"
                  type="image/webp"
                />

                <source
                  srcset="
                      ./images/nikola-desktop.jpg    1x,
                      ./images/nikola-desktop@2x.jpg 2x,
                      ./images/nikola-desktop@3x.jpg 3x
                    "
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                      ./images/nikola-table.jpg    1x,
                      ./images/nikola-table@2x.jpg 2x,
                      ./images/nikola-table@3x.jpg 3x
                    "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                      ./images/nikola-mobile.jpg    1x,
                      ./images/nikola-mobile@2x.jpg 2x,
                      ./images/nikola-mobile@3x.jpg 3x
                    "
                  media="(min-width: 320px)"
                />
                <img
                  class="avatar__img"
                  src="./images/nikola-mobile@3x.jpg"
                  alt="николай"
                  width="270"
                />
              </picture>

              <picture>
                <source
                  srcset="
                      ./images/nikola-desktop.webp    1x,
                      ./images/nikola-desktop@2x.webp 2x,
                      ./images/nikola-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/nikola-table.webp    1x,
                      ./images/nikola-table@2x.webp 2x,
                      ./images/nikola-table@3x.webp 3x
                    "
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/nikola-mobile.webp    1x,
                      ./images/nikola-mobile@2x.webp 2x,
                      ./images/nikola-mobile@3x.webp 3x
                    "
                  media="(min-width: 320px)"
                  type="image/webp"
                />

                <source
                  srcset="
                      ./images/nikola-desktop.jpg    1x,
                      ./images/nikola-desktop@2x.jpg 2x,
                      ./images/nikola-desktop@3x.jpg 3x
                    "
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                      ./images/nikola-table.jpg    1x,
                      ./images/nikola-table@2x.jpg 2x,
                      ./images/nikola-table@3x.jpg 3x
                    "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                      ./images/nikola-mobile.jpg    1x,
                      ./images/nikola-mobile@2x.jpg 2x,
                      ./images/nikola-mobile@3x.jpg 3x
                    "
                  media="(min-width: 320px)"
                />
                <img
                  class="avatar__img--base"
                  src="./images/nikola-mobile@3x.jpg"
                  alt="николай"
                  width="270"
                />
              </picture>
            </Avatar>
            <div class="dscr">
              <h3 class="dscr__name">Николай Тарасов</h3>
              <p class="dscr__text" lang="en">
                Marketing
              </p>
              <ul class="social">
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Инстаграм">
                      <use href="./images/symbol-defs.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://twitter.com/?lang=ru"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Твиттер">
                      <use href="./images/symbol-defs.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.facebook.com//"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Фейсбук">
                      <use href="./images/symbol-defs.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="ЛинкедИн">
                      <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </MemberItem>
          <MemberItem class="team__member-item">
            <Avatar class="avatar">
              <picture>
                <source
                  srcset="
                      ./images/mihail-desktop.webp    1x,
                      ./images/mihail-desktop@2x.webp 2x,
                      ./images/mihail-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/mihail-table.webp    1x,
                      ./images/mihail-table@2x.webp 2x,
                      ./images/mihail-table@3x.webp 3x
                    "
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/mihail-mobile.webp    1x,
                      ./images/mihail-mobile@2x.webp 2x,
                      ./images/mihail-mobile@3x.webp 3x
                    "
                  media="(min-width: 320px)"
                  type="image/webp"
                />

                <source
                  srcset="
                      ./images/mihail-desktop.jpg    1x,
                      ./images/mihail-desktop@2x.jpg 2x,
                      ./images/mihail-desktop@3x.jpg 3x
                    "
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                      ./images/mihail-table.jpg    1x,
                      ./images/mihail-table@2x.jpg 2x,
                      ./images/mihail-table@3x.jpg 3x
                    "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                      ./images/mihail-mobile.jpg    1x,
                      ./images/mihail-mobile@2x.jpg 2x,
                      ./images/mihail-mobile@3x.jpg 3x
                    "
                  media="(min-width: 320px)"
                />
                <img
                  class="avatar__img"
                  src="./images/mihail-mobile@3x.jpg"
                  alt="михаил"
                  width="270"
                />
              </picture>

              <picture>
                <source
                  srcset="
                      ./images/mihail-desktop.webp    1x,
                      ./images/mihail-desktop@2x.webp 2x,
                      ./images/mihail-desktop@3x.webp 3x
                    "
                  media="(min-width: 1200px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/mihail-table.webp    1x,
                      ./images/mihail-table@2x.webp 2x,
                      ./images/mihail-table@3x.webp 3x
                    "
                  media="(min-width: 768px)"
                  type="image/webp"
                />
                <source
                  srcset="
                      ./images/mihail-mobile.webp    1x,
                      ./images/mihail-mobile@2x.webp 2x,
                      ./images/mihail-mobile@3x.webp 3x
                    "
                  media="(min-width: 320px)"
                  type="image/webp"
                />

                <source
                  srcset="
                      ./images/mihail-desktop.jpg    1x,
                      ./images/mihail-desktop@2x.jpg 2x,
                      ./images/mihail-desktop@3x.jpg 3x
                    "
                  media="(min-width: 1200px)"
                />
                <source
                  srcset="
                      ./images/mihail-table.jpg    1x,
                      ./images/mihail-table@2x.jpg 2x,
                      ./images/mihail-table@3x.jpg 3x
                    "
                  media="(min-width: 768px)"
                />
                <source
                  srcset="
                      ./images/mihail-mobile.jpg    1x,
                      ./images/mihail-mobile@2x.jpg 2x,
                      ./images/mihail-mobile@3x.jpg 3x
                    "
                  media="(min-width: 320px)"
                />
                <img
                  class="avatar__img--base"
                  src="./images/mihail-mobile@3x.jpg"
                  alt="михаил"
                  width="270"
                />
              </picture>
            </Avatar>
            <div class="dscr">
              <h3 class="dscr__name">Михаил Ермаков</h3>
              <p class="dscr__text" lang="en">
                UI Designer
              </p>
              <ul class="social">
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Инстаграм">
                      <use href="./images/symbol-defs.svg#icon-instagram"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://twitter.com/?lang=ru"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Твиттер">
                      <use href="./images/symbol-defs.svg#icon-twitter"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.facebook.com//"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="Фейсбук">
                      <use href="./images/symbol-defs.svg#icon-facebook"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a
                    class="social__link"
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <svg width="20px" height="20px" aria-label="ЛинкедИн">
                      <use href="./images/symbol-defs.svg#icon-linkedin"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </MemberItem>
        </MemberList>
      </div>
    </Section>
  );
}

export default Team;
