import React from 'react';

import * as Styled from './styled';

export default function Content() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <div>KOREAN</div>
          <div>{'->'}</div>
          <div>ENGLISH</div>
        </Styled.Header>
        <Styled.Body>body</Styled.Body>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
