import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styled';
import { RootState } from '../../reducers';
import { setSelectedMenu } from '../../reducers/menu.reducer';

export default function Header() {
  const dispatch = useDispatch();

  const refreshPage = useCallback(() => {
    window.location.reload();
  }, []);

  const changeMode = useCallback(
    (kind: string, e: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();

      dispatch(setSelectedMenu({ kind }));
    },
    [dispatch],
  );

  return (
    <Styled.Container>
      <div>
        <Styled.Title onClick={refreshPage}>OCRX Translate</Styled.Title>
      </div>
      <Styled.FlexContainer className='flex'>
        <div onClick={changeMode.bind(null, 'text')}>Text</div>
        <div onClick={changeMode.bind(null, 'translate')}>Translate</div>
      </Styled.FlexContainer>
    </Styled.Container>
  );
}
