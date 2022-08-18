import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 16px;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 14px;
  background-color: rgba(37, 36, 39, 1);
  margin-bottom: 40px;
`;

export const Header = styled.div`
  height: 60px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  & > div {
    margin-right: 8px;
  }
`;

export const Body = styled.div`
  margin: 8px;
  padding: 8px;
  height: calc(600px - 76px);
  border: 2px dashed rgba(255, 255, 255, 0.12);
  border-radius: 10px;
`;
