import { Clients, Wrapper, Title, ClientsList } from './Clients.styled';
import ClientsItem from 'components/ClientIstem/ClientsItem';
import clients from 'data/clients';

function RegularClients() {
  return (
    <Clients className="section">
      <Wrapper className="container">
        <Title>Regular clients</Title>
        <ClientsList>
          {clients.length > 0 &&
            clients.map(({ id, image, title }) => (
              <ClientsItem key={id} image={image} title={title} />
            ))}
        </ClientsList>
      </Wrapper>
    </Clients>
  );
}

export default RegularClients;
