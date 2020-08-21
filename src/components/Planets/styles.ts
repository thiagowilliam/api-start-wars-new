import styled from 'styled-components';
import { shade } from 'polished';

export const ItemPlanet = styled.article`
  background: var(--color-white);
  border-radius: 5px;
  text-decoration: none;
  word-break: break-all;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s;
  flex-wrap: wrap;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  a {
    background: var(--color-button-background);
    color: var(--color-button-text);
    width: 100%;
    padding: 1.6rem 3.2rem;
    border: 0;
    font-size: 1.6rem;
    border-radius: 4px;
    margin-top: 0.8rem;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;

    &:hover {
      background: ${shade(0.1, '#FBC466')};
    }
  }
`;

export const NamePlanet = styled.div`
  background: var(--color-background-title);
  color: var(--color-white);
  width: 100%;
  text-align: center;
  border-radius: 0.5rem 0.5rem 0 0;
  padding: 0.8rem;
  p {
    margin-bottom: 5px;
    opacity: 0.7;
  }

  h3 {
    font-size: 2.4rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  }
`;

export const WrapperFeaturePlanet = styled.div`
  padding: 1.6rem;
  flex: 1;
  width: 100%;
`;

export const FeaturePlanet = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  padding: 0.8rem;
  border-bottom: 1px solid #53424c40;

  &:last-child {
    border-bottom: 0;
  }

  img {
    width: 20px;
    margin-right: 0.8rem;
    opacity: 0.4;
  }

  span {
    opacity: 0.8;
    margin-right: 0.8rem;
  }

  p {
    font-weight: 500;
  }
`;

export const Loading = styled.div`
  height: 800px;
`;
