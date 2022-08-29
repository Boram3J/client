import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styled';
import { RootState } from '../../reducers';
import { setSelectedMenu } from '../../reducers/menu.reducer';

export default function Header() {
  const dispatch = useDispatch();
  const { kind } = useSelector((state: RootState) => state.menu);

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
        <div style={kind === 'text' ? { color: 'rgba(255, 255, 255, 1)' } : {}} onClick={changeMode.bind(null, 'text')}>
          Text
        </div>
        <div
          style={kind === 'translate' ? { color: 'rgba(255, 255, 255, 1)' } : {}}
          onClick={changeMode.bind(null, 'translate')}>
          Translate
        </div>
      </Styled.FlexContainer>
    </Styled.Container>
  );
}
