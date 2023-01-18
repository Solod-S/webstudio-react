import { Formik } from 'formik';
// import { GiCondorEmblem } from 'react-icons/gi';
import {
  Icon,
  CloseBtn,
  CloseBtnIcon,
  Title,
  ForM,
  FormField,
  InputLabel,
  Wrapper,
  Input,
  TextAreaField,
  TextAreaLabel,
  TextArea,
  CheckboxField,
  CheckboxLabel,
  ChekboxInput,
  ChekboxSquare,
  ChekboxLink,
  Button,
  ErrorWrapper,
  Error,
} from './OrderForm.style';

import orderSchema from 'schema/order';

const initialValues = {
  name: '',
  pnone: '',
  mail: '',
  comment: '',
  policy: false,
};

function OrderForm({ onClose }) {
  const handleSubmit = async (values, actions) => {
    console.log(values);
    actions.setSubmitting(false);
    actions.resetForm();
    onClose();
  };

  return (
    <Formik
      validationSchema={orderSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <CloseBtn aria-label="закрыть-окно" onClick={onClose}>
            <CloseBtnIcon size={28} color="black" />
          </CloseBtn>
          <Title>Оставьте свои данные, мы вам перезвоним</Title>
          <ForM>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="name">Имя</InputLabel>
                <Error name="name" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                />
                <Icon size={18} aria-label="Иконка имени" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="pnone">Телефон</InputLabel>
                <Error name="pnone" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input type="tel" name="pnone" id="pnone" placeholder=" " />
                <Icon size={18} aria-label="Иконка телефона" />
              </Wrapper>
            </FormField>
            <FormField>
              <ErrorWrapper>
                <InputLabel htmlFor="mail">Почта</InputLabel>
                <Error name="mail" component="div" />
              </ErrorWrapper>
              <Wrapper>
                <Input
                  // type="email"
                  name="mail"
                  id="mail"
                  placeholder=" "
                />
                <Icon size={18} aria-label="Иконка почты" />
              </Wrapper>
            </FormField>
            <TextAreaField>
              <ErrorWrapper>
                <TextAreaLabel htmlFor="comment">Комментарий</TextAreaLabel>
                <Error name="comment" component="div" />
              </ErrorWrapper>
              <TextArea
                name="comment"
                rows="5"
                id="comment"
                component="textarea"
                placeholder="Введите текст"
              />
            </TextAreaField>
            <CheckboxField>
              <CheckboxLabel htmlFor="policy">
                <ChekboxInput type="checkbox" name="policy" id="policy" />
                <ChekboxSquare />
                <span>
                  Соглашаюсь с рассылкой и принимаю
                  <ChekboxLink
                    href="https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%88%D0%B5%D0%BD%D0%B8%D0%B5"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    {' '}
                    Условия договора
                  </ChekboxLink>
                </span>
              </CheckboxLabel>
              <Error
                name="policy"
                component="div"
                style={{ textAlign: 'end' }}
              />
            </CheckboxField>
            <Button type="submit" disabled={isSubmitting}>
              Отправить
            </Button>
          </ForM>
        </>
      )}
    </Formik>
  );
}

export default OrderForm;
