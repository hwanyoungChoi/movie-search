import styled from '@emotion/styled';

export const Container = styled.div`
  cursor: pointer;
  border: 1px solid black;
  word-break: break-all;
  padding: 10px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > img {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const MovieDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
