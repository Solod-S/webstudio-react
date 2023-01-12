import { Wrapper, Title, Description } from './FeaturesItem.styled';

function FeaturesItem({ image, title, description }) {
  return (
    <>
      <Wrapper>
        {/* <svg width="65.32px" height="70px" aria-label="Внимание к деталям">
          <use href={image}></use>
        </svg> */}
        {image}
      </Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
}

export default FeaturesItem;
