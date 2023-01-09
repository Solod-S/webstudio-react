import { Image, Title } from './CharacteristicItem.styled';

function CharacteristicItem({ img, title }) {
  return (
    <>
      <Image src={img} alt="коддинг" width="370" />

      <Title>{title}</Title>
    </>
  );
}

export default CharacteristicItem;
