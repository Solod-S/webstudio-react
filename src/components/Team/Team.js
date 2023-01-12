import TeamItem from 'components/TeamItem/TeamItem';
import { Section, Title, MemberList } from './Team.styled';

import teamMembers from 'data/teamMembers';

function Team() {
  return (
    <Section className="section">
      <div className="container">
        <Title>Наша команда</Title>
        <MemberList>
          {teamMembers.length > 0 &&
            teamMembers.map(({ id, name, possition, photo }) => (
              <TeamItem
                key={id}
                name={name}
                possition={possition}
                photo={photo}
              />
            ))}
        </MemberList>
      </div>
    </Section>
  );
}

export default Team;
