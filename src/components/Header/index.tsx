import React from 'react';

import * as Styled from './styled';

export default function Header() {
  return (
    <Styled.Container>
      <div>
        <Styled.Title>OCRX Translate</Styled.Title>
      </div>
      <Styled.FlexContainer className='flex'>
        <div>Text</div>
        <div>Translate</div>
      </Styled.FlexContainer>
    </Styled.Container>
  );
}
