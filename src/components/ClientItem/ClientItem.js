import { Client, Link, Icon } from './ClientItem.styled';

function ClientItem() {
  return (
    <Client>
      <Link
        href="https://google.com/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <Icon />
      </Link>
    </Client>
  );
}

export default ClientItem;
