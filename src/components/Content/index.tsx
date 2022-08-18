import React, { useCallback } from 'react';

import * as Styled from './styled';

import Photos from '../../assets/images/photos.png';

export default function Content() {
  const triggerFile = useCallback(() => {
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  }, []);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <div>KOREAN</div>
          <div>{'->'}</div>
          <div>ENGLISH</div>
        </Styled.Header>
        <Styled.Body>
          <div>
            <div onClick={triggerFile}>
              <div>
                <img src={Photos} alt='photos' />
              </div>
              <div>
                <span>Drag file here or </span>
                <span>select file to upload</span>
              </div>
              <div>JPG, PNG, GIF or other formats up to 5 MB in size</div>
            </div>
          </div>
        </Styled.Body>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
