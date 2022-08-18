import React from 'react';

import * as Styled from './styled';

export default function Footer() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        Made by{' '}
        <a style={{ color: '#1fb6ff' }} href='https://github.com/Boram3J'>
          Boram3J
        </a>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
