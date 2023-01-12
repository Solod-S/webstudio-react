import { BtnSet } from './PortfolioFilter.styled';
import PortfolioFilterItem from 'components/PortfolioFilterItem/PortfolioFilterItem';

import portfolioFilters from 'data/portfolioFilter';

function PortfolioFilter({ setCurrentFilter }) {
  return (
    <BtnSet>
      {portfolioFilters.length > 0 &&
        portfolioFilters.map(({ id, filter, title }) => (
          <PortfolioFilterItem
            key={id}
            filter={filter}
            title={title}
            setCurrentFilter={setCurrentFilter}
          />
        ))}
    </BtnSet>
  );
}

export default PortfolioFilter;
