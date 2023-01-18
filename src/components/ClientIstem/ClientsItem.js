import { Client, Link, Icon } from './ClientsItem.styled';

function ClientsItem({ image, title }) {
  return (
    <Client>
      <Link
        href="https://google.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Icon src={image} alt={title} />
      </Link>
    </Client>
  );
}

export default ClientsItem;
