import { Item, Button } from './PortfolioFilterItem.styled';

function PortfolioFilterItem({ filter, title, setCurrentFilter }) {
  return (
    <Item>
      <Button
        type="button"
        data-filter={filter}
        onClick={() => setCurrentFilter(filter)}
      >
        {title}
      </Button>
    </Item>
  );
}

export default PortfolioFilterItem;
