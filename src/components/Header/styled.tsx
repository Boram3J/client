import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  padding: 18px 36px;
  display: flex;
  align-items: center;
  height: 80px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const FlexContainer = styled.div`
  margin-left: 16px;
  color: rgba(255, 255, 255, 0.7);

  & > div {
    margin-left: 16px;

    &:hover {
      color: rgba(255, 255, 255, 1);
      cursor: pointer;
    }
  }
`;
