import styled from 'styled-components';
import { shade } from 'polished';

import { FiChevronsLeft } from 'react-icons/fi';
import StarWarsLogo from '../../components/StarWarsLogo';

export const Container = styled.div`
  width: 90vw;
  max-width: 1080px;
  margin: 0 auto;
`;

export const LogoImg = styled(StarWarsLogo)`
  width: 240px;
  height: 90px;

  path {
    fill: var(--color--base);
  }
`;

export const WrapperContainer = styled.div`
  h1 {
    display: flex;
    flex-direction: column;
    font-size: 5.2rem;
    color: var(--color--base);
    span {
      font-size: 1.8rem;
      font-weight: normal;
    }
  }
`;

export const Header = styled.header`
  padding: 2.8rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: var(--color-primary);
    text-decoration: none;
    transition: all 0.2s;
    &:hover {
      color: ${shade(0.3, '#53424C')};
    }
  }
`;

export const IconArrowLeft = styled(FiChevronsLeft)``;

export const WrapperCars = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 3.2rem 0;
`;
export const CardPlanet = styled.div`
  border-left: 3px solid var(--color-secundary);
  background: var(--color-white);
  border-radius: 0 0.5rem 0.5rem 0;
  text-decoration: none;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  flex-wrap: wrap;
  padding: 2.4rem 1.8rem;
  span {
    font-size: 1.4rem;
    color: var(--color--base);
  }
  p {
    color: var(--color--base);
    font-size: 2.4rem;
  }
`;

export const WrapperResidents = styled.section`
  h2 {
    display: flex;
    font-size: 3.2rem;
    color: var(--color--base);
    font-weight: normal;
    strong {
      font-weight: 600;
      display: block;
      margin: 0 10px;
    }
  }
`;

export const CardResident = styled.article``;
