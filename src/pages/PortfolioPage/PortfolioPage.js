import { useEffect, useState } from 'react';
import { Portfolio } from 'components';
import PortfolioFilter from 'components/PortfolioFilter/PortfolioFilter';

import { PortfolioSection, Wrapper } from './PortfolioPage.styled';

import portfolio from 'data/portfolio';

function PortfolioPage() {
  const [portfolioData, setportfolioData] = useState(portfolio);
  const [currentFilter, setCurrentFilter] = useState(null);

  useEffect(() => {
    if (currentFilter) {
      setportfolioData(
        portfolio.filter(item =>
          currentFilter !== 'all' ? item.filter === currentFilter : item
        )
      );
    }
  }, [currentFilter]);

  return (
    <PortfolioSection className="section">
      <Wrapper className="container">
        <PortfolioFilter setCurrentFilter={setCurrentFilter} />
        <Portfolio portfolioData={portfolioData} />
      </Wrapper>
    </PortfolioSection>
  );
}

export default PortfolioPage;
