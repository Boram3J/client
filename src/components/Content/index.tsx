import React, { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import * as Styled from './styled';
import { RootState } from '../../reducers';
import { callRequest, debug } from '../../utils';

import Photos from '../../assets/images/photos.png';
import Loading from '../../assets/images/loading.gif';
import FraudOriginal from '../../assets/images/fraud_org.jpg';
import Fraud from '../../assets/images/fraud.png';

export default function Content() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { kind } = useSelector((state: RootState) => state.menu);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [targetSrc, setTargetSrc] = useState<string>('');
  const [resultSrc, setResultSrc] = useState<string>('');

  const triggerFile = useCallback(() => {
    const input = inputRef.current;
    if (input) input.click();
  }, []);

  const onChangeFile = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files || e.target.files.length === 0) {
        debug('No files');
        return;
      }

      setShowLoading(true);

      const file = e.target.files[0];
      const fileUrl = URL.createObjectURL(file);
      setTargetSrc(fileUrl);

      const formData = new FormData();
      formData.append('file', e.target.files[0]);

      const { data } = await callRequest(
        `/api/${kind}`,
        'post',
        formData,
        {
          'Content-Type': 'multipart/form-data',
        },
        'arraybuffer',
      );

      const blob = new Blob([data], { type: 'image/png' });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        if (base64data) {
          setShowResult(true);
          setShowLoading(false);
          setResultSrc(base64data.toString());
        }
      };
    },
    [kind],
  );

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Header>
          <div>KOREAN</div>
          <div>{'->'}</div>
          <div>ENGLISH</div>
        </Styled.Header>
        <Styled.Body>
          {!showLoading && !showResult && (
            <Styled.ReadyContainer>
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
            </Styled.ReadyContainer>
          )}
          {showLoading && !showResult && (
            <React.Fragment>
              <Styled.LoadingContainer>
                <img src={Loading} alt='loading' />
              </Styled.LoadingContainer>
              <Styled.LoadingBackground>
                <img src={targetSrc} alt='fraud original' />
              </Styled.LoadingBackground>
            </React.Fragment>
          )}
          {!showLoading && showResult && (
            <Styled.ResultContainer>
              <img src={resultSrc} alt='fraud' />
            </Styled.ResultContainer>
          )}
        </Styled.Body>
      </Styled.Container>
      <input ref={inputRef} onChange={onChangeFile} id='file-input' style={{ display: 'none' }} type='file' />
    </Styled.Wrapper>
  );
}
