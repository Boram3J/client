import React from 'react';
import { FaGithub, FaPhone } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

import * as Styled from './styled';

export default function Footer() {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <div className='flex items-center'>
          <div className='mr-1'>
            <FaGithub />
          </div>
          <a style={{ color: '#1fb6ff' }} href='https://github.com/Boram3J'>
            Boram3J
          </a>
        </div>
        <div className='flex items-center'>
          <div className='mr-1'>
            <FaPhone />
          </div>
          <div>010-2717-2868</div>
        </div>
        <div className='flex items-center'>
          <div className='mr-1'>
            <AiFillMail />
          </div>
          <div>dlsdudg15@naver.com</div>
        </div>
      </Styled.Container>
    </Styled.Wrapper>
  );
}
