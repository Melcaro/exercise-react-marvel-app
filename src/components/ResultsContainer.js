import React from 'react';

import {
  ThumbnailsContainer,
  Thumbnail,
  ThumbnailsContainerImg,
  ThumbnailTitle,
} from './Styles';

export const ResultsContainer = () => {
  return (
    <ThumbnailsContainer>
      <Thumbnail>
        <ThumbnailsContainerImg />
        <ThumbnailTitle></ThumbnailTitle>
      </Thumbnail>
    </ThumbnailsContainer>
  );
};
