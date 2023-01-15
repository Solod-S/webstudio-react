import styled from 'styled-components';
import { RiRadarLine } from 'react-icons/ri';
import { BiTimer } from 'react-icons/bi';
import { FaBuromobelexperte, FaSpaceShuttle } from 'react-icons/fa';

export const Section = styled.section``;

export const FeaturesSection = styled.div`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeDesktop}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    padding-top: 94px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    display: flex;
    flex-wrap: wrap;
    flex-basis: calc(100% / 2 - 30px);
    margin-top: -30px;
    margin-left: -30px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    display: flex;
  }
`;

export const Item = styled.li`
  @media screen and (max-width: ${p => p.theme.breakpoints.beeforeTablet}) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
  @media screen and (min-width: ${p => p.theme.breakpoints.tablet}) {
    width: 354px;
    margin-top: 30px;
    margin-left: 30px;
  }
  @media screen and (min-width:  ${p => p.theme.breakpoints.desktop}) {
    width: 270px;
  }
`;

export const RadarIcon = styled(RiRadarLine)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TimerIcon = styled(BiTimer)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ScheduleIcon = styled(FaBuromobelexperte)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const SpaceShuttleIcon = styled(FaSpaceShuttle)`
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
