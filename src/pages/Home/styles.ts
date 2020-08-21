import styled from 'styled-components';
import { shade } from 'polished';

import { FiChevronsDown } from 'react-icons/fi';

import headerBackgroundImg from '../../assets/background-header.png';
import StarWarsLogo from '../../components/StarWarsLogo';

export const WrapperHeader = styled.section`
  width: 100%;
  background: url(${headerBackgroundImg}) no-repeat center;
  background-size: cover;
  height: 100vh;
`;

export const ContainerHeader = styled.div`
  width: 90vw;
  max-width: 1080px;
  margin: 0 auto;

  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2.4rem;
    color: var(--color-secundary);
    text-align: center;
    margin-top: 18px;
    font-style: italic;
    display: block;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
    max-width: 500px;

    @media (max-width: 880px) {
      display: none;
    }
  }

  span {
    display: block;
    text-align: center;
    font-size: 1.8rem;
  }
`;

export const LogoImg = styled(StarWarsLogo)`
  width: 240px;
  height: 90px;

  path {
    fill: var(--color-background);
  }
`;

export const IconArrow = styled(FiChevronsDown)``;

export const DescriptionHeader = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1;
  h1 {
    color: var(--color-title-secundary);
    font-size: 5rem;
    text-align: center;
  }

  p {
    font-size: 3.2rem;
    color: var(--color-text-in-white);
    text-align: center;
    margin-top: 18px;
    max-width: 670px;
  }

  a {
    background: var(--color-button-background);
    color: var(--color-button-text);
    cursor: pointer;

    padding: 1.6rem 3.2rem;
    border: 0;
    font-size: 2.8rem;
    border-radius: 4px;
    margin-top: 3.2rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.1, '#FBC466')};
    }

    svg {
      font-size: 2.8rem;
      margin-left: 1.6rem;
    }
  }
`;

export const WrapperListPlanets = styled.main`
  width: 90vw;
  max-width: 1080px;
  margin: 0 auto;
  padding: 4.8rem 0;
`;

export const Error = styled.span`
  display: block;
  color: var(--color-error);
  margin-top: 8px;
`;

export const WrapperItemPlanet = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1080px;

  @media (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
