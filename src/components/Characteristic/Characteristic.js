import { Section, Wrapper, Title, List, Item } from './Characteristic.styled';
import characteristic from 'data/characteristic';
import CharacteristicItem from 'components/CharacteristicItem/CharacteristicItem';

function Characteristic() {
  return (
    <Section className="section">
      <Wrapper className="container">
        <Title>What are we doing</Title>
        <List>
          {characteristic.length > 0 &&
            characteristic.map(({ id, image, title }) => (
              <Item key={id}>
                <CharacteristicItem img={image} title={title} />
              </Item>
            ))}
        </List>
      </Wrapper>
    </Section>
  );
}

export default Characteristic;
