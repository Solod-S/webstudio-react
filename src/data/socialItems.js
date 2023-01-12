import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedinInIcon,
} from 'components/SocialItem/SocialItem.styled';

const socialItems = [
  {
    id: 's1',
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    icon: <InstagramIcon size={20} color="grey" />,
  },
  {
    id: 's2',
    title: 'Twitter',
    link: 'https://twitter.com/?lang=ru/',
    icon: <TwitterIcon size={20} color="grey" />,
  },
  {
    id: 's3',
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    icon: <FacebookIcon size={20} color="grey" />,
  },
  {
    id: 's4',
    title: 'Linkedin',
    link: 'https://www.linkedin.com/',
    icon: <LinkedinInIcon size={20} color="grey" />,
  },
];

export default socialItems;
