import React from 'react';

import * as S from './styles';

const Pagination: React.FC = () => {
  return (
    <S.WarpperPagination>
      <S.ListPagination>
        <S.ButtonPrev>{'<<'}</S.ButtonPrev>

        <li>
          <S.ButtonPage>1</S.ButtonPage>
        </li>

        <S.ButtonNext>{'>>'}</S.ButtonNext>
      </S.ListPagination>
    </S.WarpperPagination>
  );
};

export default Pagination;
