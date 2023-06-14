import styled from '@emotion/styled';
import { Z_INDEX } from 'lib/constants.ts';

export const Form = styled.form`
  display: flex;
  height: 40px;
  padding: 18px;
  background: lightgray;

  position: sticky;
  top: 0;
  z-index: ${Z_INDEX.Fixed};

  > input {
    flex: 1;
    border: 1px solid black;
    outline: 0;
    padding-left: 4px;
  }

  > button {
    width: 56px;
    border: 1px solid black;
  }
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  padding: 16px 24px;
`;

export const DialogContent = styled.div`
  > div {
    display: flex;
    margin-top: 10px;
    gap: 10px;

    > button {
      width: 150px;
    }
  }
`;
