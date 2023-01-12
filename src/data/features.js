import {
  RadarIcon,
  TimerIcon,
  ScheduleIcon,
  SpaceShuttleIcon,
} from 'components/Features/Features.styled';

const features = [
  {
    id: 'f1',
    image: <RadarIcon size={70} color="#2F303A" />,
    title: 'Внимание к деталям',
    description:
      'Идейные соображения, а также начало повседневной работы по формированию позиции.',
  },
  {
    id: 'f2',
    image: <TimerIcon size={70} color="#2F303A" />,
    title: 'Пунктуальность',
    description:
      'Задача организации, в особенности же рамки и место обучения кадров влечет за собой.',
  },
  {
    id: 'f3',
    image: <ScheduleIcon size={70} color="#2F303A" />,
    title: 'Планирование',
    description:
      'Равным образом консультация с широким активом в значительной степени обуславливает.',
  },
  {
    id: 'f4',
    image: <SpaceShuttleIcon size={70} color="#2F303A" />,
    title: 'Современные технологии',
    description:
      'Значимость этих проблем настолько очевидна, что реализация плановых заданий.',
  },
];

export default features;
