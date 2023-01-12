import { PortfolioSection, Wrapper, PortfolioList } from './Portfolio.styled';
import { useEffect, useState } from 'react';

import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter';
import PortfolioItem from 'components/PortfolioItem/PortfolioItem';

import portfolio from 'data/portfolio';

function Portfolio() {
  const [portfolioData, setportfolioData] = useState(portfolio);
  const [currentFilter, setCurrentFilter] = useState(null);

  // console.log(currentFilter);
  useEffect(() => {
    if (currentFilter) {
      setportfolioData(
        portfolio.filter(item =>
          currentFilter !== 'all' ? item.filter === currentFilter : item
        )
      );
    }
  }, [portfolioData, currentFilter]);
  return (
    <PortfolioSection className="section ">
      <Wrapper className="container">
        <PortfolioFilter setCurrentFilter={setCurrentFilter} />
        <PortfolioList>
          {portfolioData.length > 0 &&
            portfolio.map(({ id, title, img, category, description }) => (
              <PortfolioItem
                key={id}
                title={title}
                img={img}
                category={category}
                description={description}
              />
            ))}
        </PortfolioList>
      </Wrapper>
    </PortfolioSection>
  );
}

export default Portfolio;
