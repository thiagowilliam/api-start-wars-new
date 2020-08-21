import styled from 'styled-components';

export const WarpperPagination = styled.section`
  position: relative;
  width: 100%;
  border-top: 1px solid #40404033;
  margin-top: 2.4rem;
  padding: 2.4rem 30%;
`;
export const ListPagination = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  li {
    list-style: none;
  }

  button {
    border: none;
    cursor: pointer;
    padding: 0.8rem 1.8rem;
    border-radius: 0.5rem;
  }

  .active {
    background: var(--color-button-background);
    color: var(--color-button-text);
  }
`;
export const ButtonPage = styled.button``;
export const ButtonPrev = styled.button``;
export const ButtonNext = styled.button``;
