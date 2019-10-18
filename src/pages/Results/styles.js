import styled from 'styled-components';

export const Container = styled.div`
  .my-header-1.my-header-2 {
    height: 455px;
    padding: 40px;
    display: block;
    width: 100%;
  }
  .my-body {
    height: 55px;
    border-radius: 5px;
    border: rgba(0, 0, 0, 0.8);
  }
  .my-footer {
    height: 35px;
  }
  .my-title-1 {
    color: rgba(0, 0, 30, 0.7);
    font-size: 50px;
  }
  .my-img {
    height: 110px;
    width: 110px;
  }
  .my-input-1 {
    border-radius: 5vh;
    border: none;
    width: 100%;
    background: white;
    height: 30px;
  }
  .my-box-1 {
    height: 300px;
    border: 2px solid whitesmoke;
    background: white;
  }

  h1 {
    color: #4682b4;
    font-size: 34px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin-right: 10px;
  }

  small {
    font-size: 15px;
  }

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 25px;
    font-size: 16px;
  }

  h2 {
    display: grid;
    text-align: center;
    color: #4682b4;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    flex-direction: row;
    align-items: center;
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
  max-width: auto;
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
  border-radius: 5px;
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
