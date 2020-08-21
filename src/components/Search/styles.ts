import styled from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
  margin-bottom: 4rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: var(--color--base);
    border: 2px solid var(--color-white);
    border-right: 0;

    &:focus {
      border-color: var(--color-button-background);
    }

    &::placeholder {
      color: var(--color-text-placeholder);
    }
  }
`;

export const ButtonSearch = styled.button`
  width: 210px;
  height: 70px;
  background: var(--color-button-background);
  border-radius: 0 0.5rem 0.5rem 0;
  border: 0;
  color: var(--color-button-text);
  transition: all 0.2s;

  &:hover {
    background: ${shade(0.1, '#FBC466')};
  }
`;

export const ButtonCleanSearch = styled.button`
  display: block;
  width: 100%;
  background: var(--color-button-background-clean);
  padding: 1.2rem;
  border: 0;
  color: var(--color-button-text);
  transition: all 0.2s;

  &:hover {
    background: ${shade(0.1, '#a8a8b3')};
  }
`;
