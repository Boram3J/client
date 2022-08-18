import React, { useCallback, useRef, useState } from 'react';

import * as Styled from './styled';

import Photos from '../../assets/images/photos.png';
import Loading from '../../assets/images/loading.gif';
import FraudOriginal from '../../assets/images/fraud_org.jpg';
import Fraud from '../../assets/images/fraud.png';

export default function Content() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const triggerFile = useCallback(() => {
    const input = inputRef.current;
    if (input) input.click();
  }, []);

  const onChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setShowLoading(true);
    setTimeout(() => {
      setShowResult(true);
      setShowLoading(false);
    }, 4000);
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
                <img src={FraudOriginal} alt='fraud original' />
              </Styled.LoadingBackground>
            </React.Fragment>
          )}
          {!showLoading && showResult && (
            <Styled.ResultContainer>
              <img src={Fraud} alt='fraud' />
            </Styled.ResultContainer>
          )}
        </Styled.Body>
      </Styled.Container>
      <input ref={inputRef} onChange={onChangeFile} id='file-input' style={{ display: 'none' }} type='file' />
    </Styled.Wrapper>
  );
}
