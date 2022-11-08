import styled from '@emotion/styled';

export const Ul = styled.ul`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: calc(100vw - 48px);

  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const FilmCard = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 16%) 4px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;

  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px #00000040;
    transition: 0.5s ease all;
    transform: scale(1.05);
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const MovieTitle = styled.h2`
  padding: 8px;
  font-size: 20px;
  line-height: 1.17;
  text-transform: uppercase;
  color: #0e0f69;
  min-height: 48px;
`;
