import css from './AppBar.module.css';
import { GlobalStyle } from 'styles/Global.style';

function AppBar() {
  return (
    <header>
      <div className={`${css.navigation} container`}>
        <a className={css.logo} href="./index.html">
          <span className="logo--pre-color">Web</span>Studio
        </a>
        <button
          className="mobile-btn"
          type="button"
          aria-expanded="false"
          data-menu-button
        >
          <svg
            className="mobile-btn__svg"
            width="40px"
            height="40px"
            aria-label="menu"
          >
            <use
              className="mobile-btn__icon-close"
              href="./images/symbol-defs.svg#icon-mobile-close"
            ></use>
            <use
              className="mobile-btn__icon-menu"
              href="./images/symbol-defs.svg#icon-mobile-menu"
            ></use>
          </svg>
        </button>
        <div className={css.navigation__menuWrapper} data-menu>
          <nav className={css.navigation__menu}>
            <ul className={css.navigation__list}>
              <li
                className={`${css.navigation__item} ${css.navigation__linkCurrentPageStatus}`}
              >
                <a
                  className={`${css.navigation__link}
                    ${css.navigation__linkCurrentPageStatus}
                    ${css.navigation__linkSlider}`}
                  href="./index.html"
                >
                  Студия
                </a>
              </li>
              <li className={css.navigation__item}>
                <a
                  className={`${css.navigation__link} ${css.navigation__linkSlider}`}
                  href="./portfolio.html"
                >
                  Портфолио
                </a>
              </li>
              <li className={css.navigation__item}>
                <a
                  className={`${css.navigation__link} ${css.navigation__linkSlider}`}
                  href="./contact.html"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <ul className={css.navigation__contactList}>
            <li className={css.navigation__itemContacts}>
              <a
                className={css.navigation__linkContacts}
                href="mailto:info@devstudio.com"
              >
                <svg
                  className={`${css.navigation__icon} ${css.navigation__iconTabletMail}`}
                  width="16px"
                  height="12px"
                  aria-label="Почта"
                >
                  <use href="./images/symbol-defs.svg#icon-mailto"></use>
                </svg>
                info@devstudio.com
              </a>
            </li>
            <li className={css.navigation__itemContacts}>
              <a
                className={`${css.navigation__linkContacts} ${css.mobileModificator}`}
                href="tel:+380961111111"
              >
                <svg
                  className={`${css.navigation__icon} ${css.navigation__iconTabletTell}`}
                  width="10px"
                  height="16px"
                  aria-label="Телефон"
                >
                  <use href="./images/symbol-defs.svg#icon-tellto"></use>
                </svg>
                +38 096 111 11 11
              </a>
            </li>
          </ul>
          {/* <ul className="social-mobile">
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Instagram
              </a>
            </li>
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://twitter.com/?lang=ru"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Twitter
              </a>
            </li>
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://www.facebook.com//"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Facebook
              </a>
            </li>
            <li className="social-mobile__item">
              <a
                className="social-mobile__link"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                LinkedIn
              </a>
            </li>
          </ul> */}
        </div>
      </div>
    </header>
    // <header>
    //   <div className={(css.navigation, css.container)}>
    //     <a className="logo" href="./index.html">
    //       <span className="logo--pre-color">Web</span>Studio
    //     </a>
    //     <button
    //       className="mobile-btn"
    //       type="button"
    //       aria-expanded="false"
    //       data-menu-button
    //     >
    //       <svg
    //         className="mobile-btn__svg"
    //         width="40px"
    //         height="40px"
    //         aria-label="menu"
    //       >
    //         <use
    //           className="mobile-btn__icon-close"
    //           href="./images/symbol-defs.svg#icon-mobile-close"
    //         ></use>
    //         <use
    //           className="mobile-btn__icon-menu"
    //           href="./images/symbol-defs.svg#icon-mobile-menu"
    //         ></use>
    //       </svg>
    //     </button>
    //     <div className="navigation__menu-wrapper" data-menu>
    //       <nav className="navigation__menu">
    //         <ul className="navigation__list">
    //           <li className="navigation__item navigation__item--current-page-status">
    //             <a
    //               className="navigation__link navigation__link--current-page-status navigation__link--slider"
    //               href="./index.html"
    //             >
    //               Студия
    //             </a>
    //           </li>
    //           <li className="navigation__item">
    //             <a
    //               className="navigation__link navigation__link--slider"
    //               href="./portfolio.html"
    //             >
    //               Портфолио
    //             </a>
    //           </li>
    //           <li className="navigation__item">
    //             <a
    //               className="navigation__link navigation__link--slider"
    //               href="./contact.html"
    //             >
    //               Контакты
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //       <ul className="navigation__contact-list">
    //         <li className="navigation__item-contacts">
    //           <a
    //             className="navigation__link-contacts"
    //             href="mailto:info@devstudio.com"
    //           >
    //             <svg
    //               className="navigation__icon navigation__icon--tablet-mail"
    //               width="16px"
    //               height="12px"
    //               aria-label="Почта"
    //             >
    //               <use href="./images/symbol-defs.svg#icon-mailto"></use>
    //             </svg>
    //             info@devstudio.com
    //           </a>
    //         </li>
    //         <li className="navigation__item-contacts">
    //           <a
    //             className="navigation__link-contacts --mobile-modificator"
    //             href="tel:+380961111111"
    //           >
    //             <svg
    //               className="navigation__icon navigation__icon--tablet-tell"
    //               width="10px"
    //               height="16px"
    //               aria-label="Телефон"
    //             >
    //               <use href="./images/symbol-defs.svg#icon-tellto"></use>
    //             </svg>
    //             +38 096 111 11 11
    //           </a>
    //         </li>
    //       </ul>
    //       <ul className="social-mobile">
    //         <li className="social-mobile__item">
    //           <a
    //             className="social-mobile__link"
    //             href="https://www.instagram.com/"
    //             target="_blank"
    //             rel="noopener noreferrer nofollow"
    //           >
    //             Instagram
    //           </a>
    //         </li>
    //         <li className="social-mobile__item">
    //           <a
    //             className="social-mobile__link"
    //             href="https://twitter.com/?lang=ru"
    //             target="_blank"
    //             rel="noopener noreferrer nofollow"
    //           >
    //             Twitter
    //           </a>
    //         </li>
    //         <li className="social-mobile__item">
    //           <a
    //             className="social-mobile__link"
    //             href="https://www.facebook.com//"
    //             target="_blank"
    //             rel="noopener noreferrer nofollow"
    //           >
    //             Facebook
    //           </a>
    //         </li>
    //         <li className="social-mobile__item">
    //           <a
    //             className="social-mobile__link"
    //             href="https://www.linkedin.com/"
    //             target="_blank"
    //             rel="noopener noreferrer nofollow"
    //           >
    //             LinkedIn
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </header>
  );
}

export default AppBar;
