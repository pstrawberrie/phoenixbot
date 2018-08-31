import {color, font} from './helpers';
import styled from 'styled-components';

export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 0 20px;

  .logo {
    display: block;
    margin-bottom: 3rem;
  }
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem .75rem;
  background: ${color.blackTransparent};
  color: ${color.white};

  .name {
    font-size: 1.2rem;
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .item {
      display: block;
      text-align: center;

      .number {
        font-size: 1.4rem;
      }
      .small {
        font-size: 10px;
      }
    }
  }
  svg {
    display: inline-block;
    width: 22px;
    height: 22px;
    fill: ${color.white};
  }
  &.new {
    cursor: pointer;
    transition: ${color.shadowTransition};

    &:hover {
      box-shadow: ${color.shadow1};
    }

    .name {
      display: flex;
      justify-content: space-between;
    }
    span {display: inline-block;}
  }
`;

export const SmallH3 = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-family: ${font.family.bold};
  font-size: 1.1rem;
`;