import {
  Item,
  Link,
  Wrapper,
  Poster,
  Overflow,
  PosterOverFlow,
  TextWraper,
  Title,
  Text,
} from './PortfolioItem.styled';

function PortfolioItem({ title, img, category, description, id }) {
  return (
    <Item>
      <Link to={id}>
        <Wrapper>
          <Poster src={img} alt="технокряк" width="370" />

          <Overflow>
            <PosterOverFlow>{description}</PosterOverFlow>
          </Overflow>
        </Wrapper>
        <TextWraper>
          <Title>{title}</Title>
          <Text>{category}</Text>
        </TextWraper>
      </Link>
    </Item>
  );
}
export default PortfolioItem;
