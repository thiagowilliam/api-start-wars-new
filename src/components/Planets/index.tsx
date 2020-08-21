import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface Props {
  name: string;
  terrain: string;
  diameter: string;
  climate: string;
  url: string;
  population: string;
}

const Planets: React.FC<Props> = ({
  name,
  terrain,
  diameter,
  climate,
  url,
  population,
}) => {
  const recuperaID = url.split('swapi.dev/api/planets/');
  const idNumber = recuperaID[1].split('/');
  return (
    <S.ItemPlanet>
      <S.NamePlanet>
        <p>Nome Do Planeta</p>
        <h3>{name}</h3>
      </S.NamePlanet>

      <S.WrapperFeaturePlanet>
        <S.FeaturePlanet>
          <span>Terreno:</span>
          <p>{terrain}</p>
        </S.FeaturePlanet>

        <S.FeaturePlanet>
          <span>Diametro:</span>
          <p>{diameter}</p>
        </S.FeaturePlanet>

        <S.FeaturePlanet>
          <span>Clima:</span>
          <p>{climate}</p>
        </S.FeaturePlanet>

        <S.FeaturePlanet>
          <span>Total de habitantes:</span>
          <p>{population}</p>
        </S.FeaturePlanet>
      </S.WrapperFeaturePlanet>
      <Link to={`/${name}/${idNumber[0]}`}>Saiba Mais</Link>
    </S.ItemPlanet>
  );
};

export default Planets;
