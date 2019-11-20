import React from 'react';

import {
  ThumbnailsContainer,
  Thumbnail,
  LinkToCharacterPage,
  ThumbnailsContainerImg,
  ThumbnailImg,
  ThumbnailTitle,
} from './Styles';

export const ResultsContainer = ({ value }) => {
  console.log(value);
  return (
    <ThumbnailsContainer>
      {value.map(({ id, name, thumbnail: { path, extension } }) => (
        <Thumbnail key={id}>
          <LinkToCharacterPage to={`/character/${id}`}>
            <ThumbnailsContainerImg>
              <ThumbnailImg alt="character" src={`${path}.${extension}`} />
            </ThumbnailsContainerImg>
            <ThumbnailTitle>{name}</ThumbnailTitle>
          </LinkToCharacterPage>
        </Thumbnail>
      ))}
    </ThumbnailsContainer>
  );
};
