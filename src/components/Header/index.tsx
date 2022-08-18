import React, { useCallback } from 'react';

import * as Styled from './styled';

export default function Header() {
  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Styled.Container>
      <div>
        <Styled.Title onClick={refreshPage}>OCRX Translate</Styled.Title>
      </div>
      <Styled.FlexContainer className='flex'>
        <div>Text</div>
        <div>Translate</div>
      </Styled.FlexContainer>
    </Styled.Container>
  );
}
