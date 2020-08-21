import React from 'react';
import { Link, useParams } from 'react-router-dom';

import * as S from './styles';
import { useAxiosData } from '../../hooks/useFetch';

interface Results {
  name: string;
  terrain: string;
  diameter: string;
  climate: string;
  url: string;
  films: Array<string>;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  residents: Array<string>;
}

interface APIPeople {
  name: string;
  hair_color: string;
  eye_color: string;
  gender: string;
  species: Array<string>;
  vehicles: Array<string>;
}

const DetailsPlanet: React.FC = () => {
  const { id } = useParams();

  const { data } = useAxiosData<Results>(`planets/${id}`);

  // const [data, setData] = useState<Data>();

  // useEffect(() => {
  //   Promise.all([
  //     fetch(`https://swapi.dev/api/planets/${id}`),
  //     fetch(`https://swapi.dev/api/people/1/`),
  //   ]).then(async (responses) => {
  //     const [planetResponse, peopleResponse] = responses;

  //     const planet = await planetResponse.json();
  //     const people = await peopleResponse.json();

  //     setData({
  //       planet,
  //       people,
  //     });
  //   });
  // }, []);

  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <S.Container>
      <S.Header>
        <S.LogoImg alt="Star Wars" title="Star Wars" />
        <Link to="/">
          <S.IconArrowLeft />
          Voltar
        </Link>
      </S.Header>

      <S.WrapperContainer>
        <h1>
          <span>Bem vindo ao planeta:</span>
          {data?.name}
        </h1>

        <S.WrapperCars>
          <S.CardPlanet>
            <span>Periodo de Rotação</span>
            <p>{data?.rotation_period}</p>
          </S.CardPlanet>

          <S.CardPlanet>
            <span>Periodo de Orbitação</span>
            <p>{data?.orbital_period}</p>
          </S.CardPlanet>

          <S.CardPlanet>
            <span>Diametro</span>
            <p>{data?.diameter}</p>
          </S.CardPlanet>

          <S.CardPlanet>
            <span>Clima</span>
            <p>{data?.climate}</p>
          </S.CardPlanet>

          <S.CardPlanet>
            <span>Gravidade</span>
            <p>{data?.gravity}</p>
          </S.CardPlanet>

          <S.CardPlanet>
            <span>Terreno</span>
            <p>{data?.terrain}</p>
          </S.CardPlanet>

          <S.CardPlanet>
            <span>Populacao</span>
            <p>{data?.population}</p>
          </S.CardPlanet>
        </S.WrapperCars>

        <S.WrapperResidents>
          <h2>
            Existem
            <strong>{data?.residents.length}</strong>
            pessoas relacionadas a este planeta!
          </h2>

          <h2>
            Existem
            <strong>{data?.films.length}</strong>
            Filmes relacionados a este planeta!
          </h2>

          <S.CardResident>
            <button>Pessoa</button>
          </S.CardResident>
        </S.WrapperResidents>
      </S.WrapperContainer>

      {/* <div>
        <p>
          Nome:
          {data?.people.name}
        </p>

        <p>
          Cabelo:
          {data?.people.hair_color}
        </p>

        <p>
          Olhos:
          {data?.people.eye_color}
        </p>
        <p>
          Gênero:
          {data?.people.gender}
        </p>
        <p>
          Espécie:
          {data?.people.species}
        </p>
        <p>
          Veículos:
          {data?.people.vehicles}
        </p>
      </div> */}
    </S.Container>
  );
};
export default DetailsPlanet;
