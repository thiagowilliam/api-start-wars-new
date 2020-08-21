import React from 'react';

import * as S from './styles';

const Search: React.FC = () => {
  return (
    <>
      <S.Form>
        <input type="text" placeholder="Digite o nome do planeta." />
        <S.ButtonSearch type="submit">Pesquisar</S.ButtonSearch>
      </S.Form>
    </>
  );
};

export default Search;
