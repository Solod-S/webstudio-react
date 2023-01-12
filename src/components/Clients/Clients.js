import { Clients, Wrapper, Title, ClientsList } from './Clients.styled';
import ClientItem from 'components/ClientItem/ClientItem';

function RegularClients() {
  return (
    <Clients className="section">
      <Wrapper className="container">
        <Title>Постоянные клиенты</Title>
        <ClientsList>
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
          <ClientItem />
        </ClientsList>
      </Wrapper>
    </Clients>
  );
}

export default RegularClients;
