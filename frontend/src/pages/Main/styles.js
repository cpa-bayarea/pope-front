import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #f5f5f5;
  border-radius: 35px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 25px auto;

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
    border-radius: 4px;
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
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  & [disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Logo = styled.div`
  max-width: 700px;
  background: #fff;
  margin: 3px auto;
  margin-top: 50px;
  align-items: center;
`;

export const Footer = styled.footer`
  border-top: 1px solid #e7e7e7;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 60px;
  width: 100%;
  background: #4682b4;
  text-align: center;
`;
