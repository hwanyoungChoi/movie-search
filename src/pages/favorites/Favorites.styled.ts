import styled from '@emotion/styled';

export const Container = styled.div``;

export const Title = styled.h1`
  padding: 18px;
  margin: 0;
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
