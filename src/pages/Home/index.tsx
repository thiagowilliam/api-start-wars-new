import React from 'react';

import { Link as LinkAnchor } from 'react-scroll';

import * as S from './styles';
import SearchInput from '../../components/Search';
import ListPlanets from '../../components/Planets';
import Pagination from '../../components/Pagination';
import { useAxiosResults } from '../../hooks/useFetch';

interface Props {
  name: string;
  terrain: string;
  diameter: string;
  climate: string;
  url: string;
  population: string;
}

const Home: React.FC = () => {
  const { data } = useAxiosResults<Props[]>('planets/');

  if (!data) {
    return <p>Carregando..</p>;
  }
  // const [dataPlanets, setDataPlanets] = useState<Props[]>([]);

  // useEffect(() => {
  //   fetch('https://swapi.dev/api/planets/').then((response) => {
  //     response.json().then((planets) => {
  //       setDataPlanets(planets.results);
  //     });
  //   });
  // }, []);

  return (
    <>
      <S.WrapperHeader>
        <S.ContainerHeader>
          <S.Header>
            <S.LogoImg alt="Star Wars" title="Star Wars" />
            <p>
              Um Jedi usa a Força para o conhecimento e defesa, nunca para o
              ataque.
              <span>'Mestre Yoda'</span>
            </p>
          </S.Header>

          <S.DescriptionHeader>
            <h1>Bem vindo Jovem Padawan</h1>
            <p>
              Explore curiosidades sobre os planetas do universo
              <strong> Star Wars.</strong>
            </p>

            <LinkAnchor to="anchorPlanets" smooth offset={-70} duration={500}>
              Que a força esteja com você
              <S.IconArrow />
            </LinkAnchor>
          </S.DescriptionHeader>
        </S.ContainerHeader>
      </S.WrapperHeader>

      <S.WrapperListPlanets id="anchorPlanets">
        <SearchInput />

        <S.WrapperItemPlanet>
          {data.map((item) => (
            <ListPlanets
              key={item.name}
              name={item.name}
              terrain={item.terrain}
              diameter={item.diameter}
              climate={item.climate}
              population={item.population}
              url={item.url}
            />
          ))}
        </S.WrapperItemPlanet>
        <Pagination />
      </S.WrapperListPlanets>
    </>
  );
};

export default Home;
