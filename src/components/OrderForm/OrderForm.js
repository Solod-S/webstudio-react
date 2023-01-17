import {
  Icon,
  CloseBtn,
  CloseBtnIcon,
  Title,
  Form,
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
} from './OrderForm.style';

function OrderForm({ onClose }) {
  return (
    <>
      <CloseBtn aria-label="закрыть-окно" onClick={onClose}>
        <CloseBtnIcon size={28} color="black" />
      </CloseBtn>
      <Title>Оставьте свои данные, мы вам перезвоним</Title>
      <Form>
        <FormField>
          <InputLabel htmlFor="name">Имя</InputLabel>
          <Wrapper>
            <Input type="text" name="name" id="name" placeholder=" " />
            <Icon size={18} aria-label="Иконка имени" />
          </Wrapper>
        </FormField>
        <FormField>
          <InputLabel htmlFor="pnone">Телефон</InputLabel>
          <Wrapper>
            <Input type="tel" name="pnone" id="pnone" placeholder=" " />
            <Icon size={18} aria-label="Иконка телефона" />
          </Wrapper>
        </FormField>
        <FormField>
          <InputLabel htmlFor="mail">Почта</InputLabel>
          <Wrapper>
            <Input type="email" name="mail" id="mail" placeholder=" " />
            <Icon size={18} aria-label="Иконка почты" />
          </Wrapper>
        </FormField>
        <TextAreaField>
          <TextAreaLabel htmlFor="comment">Комментарий</TextAreaLabel>
          <TextArea
            name="feedback"
            rows="5"
            id="comment"
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
        </CheckboxField>
        <Button type="submit">Отправить</Button>
      </Form>
    </>
  );
}

export default OrderForm;
