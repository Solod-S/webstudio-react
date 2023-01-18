import { useState, useEffect } from 'react';
import {
  ContactHero,
  Location,
  Clients,
  ModalWindow,
  OrderForm,
} from 'components';

function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    isOpen !== false
      ? document.querySelector('body').classList.add('no-scroll')
      : document.querySelector('body').classList.remove('no-scroll');
  }, [isOpen]);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <ContactHero openModal={openModal} isOpen={isOpen} />
      <Location />
      <Clients />
      <ModalWindow
        isOpen={isOpen}
        onClose={closeModal}
        component={<OrderForm onClose={closeModal} />}
      />
    </>
  );
}

export default ContactPage;
