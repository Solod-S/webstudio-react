import { Section, FeaturesSection, List, Item } from './Features.styled';

import FeaturesItem from 'components/FeaturesItem/FeaturesItem';
import features from 'data/features';

function Features() {
  return (
    <Section>
      <FeaturesSection className="container">
        <List>
          {features.length > 0 &&
            features.map(({ id, image, title, description }) => (
              <Item key={id}>
                <FeaturesItem
                  image={image}
                  title={title}
                  description={description}
                />
              </Item>
            ))}
        </List>
      </FeaturesSection>
    </Section>
  );
}

export default Features;
