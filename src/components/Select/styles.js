import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  > label {
    margin-bottom: 2px;
  }

  > select {
    height: 50px;
    border-radius: 3px;
    background-color: white;
    font-size: 16px;
  }
`;
