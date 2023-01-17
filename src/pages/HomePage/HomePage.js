import { useState, useEffect } from 'react';
import {
  MainHero,
  Features,
  Characteristic,
  Team,
  Clients,
  ModalWindow,
  OrderForm,
} from 'components/';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    isOpen !== false
      ? document.querySelector('body').classList.add('no-scroll')
      : document.querySelector('body').classList.remove('no-scroll');
  }, [isOpen]);
  const openModal = () => {
    console.log(openModal);
    setIsOpen(true);
  };

  const closeModal = () => {
    console.log(closeModal);
    setIsOpen(false);
  };

  return (
    <>
      <MainHero openModal={openModal} />
      <Features />
      <Characteristic />
      <Team />
      <Clients />
      <ModalWindow
        isOpen={isOpen}
        onClose={closeModal}
        component={<OrderForm onClose={closeModal}/>}
      />
    </>
  );
}

export default HomePage;
