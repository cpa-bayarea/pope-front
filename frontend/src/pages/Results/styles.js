import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #f5f5f5;
  border-radius: -1px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: -100px auto;

  small {
    font-size: 10px;
  }

  h1 {
    color: #4682b4;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 25px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #4682b4;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  & [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Logo = styled.div`
  max-width: 10000px;
  background: #fff;
  margin: 3px auto;
  margin-top: 0px;
`;

export const Panel = styled.div`
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 140px auto;

  svg {
    margin-right: 3px;
  }
`;

export const Card = styled.div`
  box-shadow: 0 15px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 50px;
`;

export const Title = styled.h1`
  display: grid;
  text-align: center;
  color: #4682b4;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  flex-direction: row;
  align-items: center;
`;
