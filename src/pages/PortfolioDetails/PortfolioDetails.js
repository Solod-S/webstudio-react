// import PortfolioDetailsList from 'Components/PortfolioDetailsList';
import { useParams } from 'react-router-dom';
import portfolio from 'data/portfolio';

import {
  Link,
  Main,
  Section,
  Title,
  Info,
  ImgWrapper,
  Image,
  TexList,
  ShortDscr,
  TextItem,
  Text,
} from './PortfolioDetails.styled';

function PortfolioDetails() {
  const { portfolioId } = useParams();
  const portfolioItem = getPortfolioById(portfolioId);

  function getPortfolioById(portfolioId) {
    return portfolio.find(item => item.id === portfolioId);
  }

  // const sameTypeList = portfolio.filter(
  //   item =>
  //     item.filter === portfolioItem.filter && item.title !== portfolioItem.title
  // );

  return (
    <Main>
      <section className="container">
        <Link to="/portfolio" className="portfolioDetails-link">
          Back to portfolio
        </Link>
        <Section>
          <Title>{portfolioItem.title}</Title>
          <Info>
            <ImgWrapper>
              <Image src={portfolioItem.img} alt={portfolioItem.title} />
            </ImgWrapper>
            <TexList>
              <TextItem>
                <ShortDscr>Amet consectetur adipisicing, 2022</ShortDscr>
              </TextItem>
              <TextItem>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt excepturi nesciunt iusto dignissimos assumenda
                  ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi,
                  amet natus reiciendis atque fuga dolore? Lorem, ipsum dolor
                  sit amet consectetur adipisicing elit. Impedit suscipit
                  quisquam incidunt commodi fugiat aliquam praesentium ipsum
                  quos unde voluptatum?
                </Text>
              </TextItem>
              <TextItem>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt excepturi nesciunt iusto dignissimos assumenda
                  ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi,
                  amet natus reiciendis atque fuga dolore?
                </Text>
              </TextItem>
              <TextItem>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus sunt excepturi nesciunt iusto dignissimos assumenda
                  ab quae cupiditate a, sed reprehenderit? Deleniti optio quasi,
                  amet natus reiciendis atque fuga dolore? Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Doloribus sunt
                  excepturi nesciunt iusto dignissimos assumenda ab quae
                  cupiditate a, sed reprehenderit? Deleniti optio quasi, amet
                  natus reiciendis atque fuga dolore?
                </Text>
              </TextItem>
            </TexList>
          </Info>
        </Section>
      </section>

      {/* <PortfolioDetailsList sameTypeList={sameTypeList} /> */}
    </Main>
  );
}

export default PortfolioDetails;
