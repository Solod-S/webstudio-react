import { PortfolioList } from './Portfolio.styled';
import { useEffect, useState } from 'react';
import PortfolioItem from 'components/PortfolioItem/PortfolioItem';

function Portfolio({ portfolioData }) {
  const [itemList, setitemList] = useState(portfolioData);

  useEffect(() => {
    setitemList(portfolioData);
  }, [portfolioData]);

  return (
    <PortfolioList>
      {itemList.length > 0 &&
        itemList.map(({ id, title, img, category, description }) => (
          <PortfolioItem
            key={id}
            id={id}
            title={title}
            img={img}
            category={category}
            description={description}
          />
        ))}
    </PortfolioList>
  );
}

export default Portfolio;
