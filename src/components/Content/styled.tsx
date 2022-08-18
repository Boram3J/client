import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 0 16px;
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px - 80px - 60px);
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
  height: calc(100% - 76px);
  border: 2px dashed rgba(255, 255, 255, 0.12);
  border-radius: 10px;

  & > div {
    width: 340px;
    height: 100%;
    padding: 20px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      text-align: center;
      cursor: pointer;

      & > div:nth-of-type(1) {
        width: 100px;
        margin: 0 auto 20px;
      }

      & > div:nth-of-type(2) {
        font-size: 24px;
        font-weight: 600;

        & > span:nth-of-type(1) {
        }

        & > span:nth-of-type(2) {
          color: rgba(222, 190, 73, 1);
        }
      }

      & > div:nth-of-type(3) {
        font-size: 16px;
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;
