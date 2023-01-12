import SocialItem from 'components/SocialItem/SocialItem';
import {
  Member,
  Avatar,
  AvatarImg,
  Description,
  Name,
  Text,
  SocialList,
} from './TeamItem.styled';

import socialItems from 'data/socialItems';

function TeamItem({ id, photo, name, possition }) {
  return (
    <Member key={id}>
      <Avatar>
        <AvatarImg src={photo} alt="Игорь" width="270" />
      </Avatar>
      <Description>
        <Name>{name}</Name>
        <Text lang="en">{possition}</Text>
        <SocialList>
          {socialItems.length > 0 &&
            socialItems.map(({ id, icon, link }) => (
              <SocialItem key={id} icon={icon} link={link} />
            ))}
        </SocialList>
      </Description>
    </Member>
  );
}
export default TeamItem;
