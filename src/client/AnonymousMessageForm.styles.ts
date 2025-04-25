import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

export const Header = styled.header`
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 5px 0 0;
    color: #e6e6e6;
  }
`;

export const TextBox = styled.textarea`
  width: 100%;
  max-width: 400px;
  height: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  resize: none;
  margin-bottom: 20px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SendButton = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const HighlightedLinks = styled.div`
  margin-top: 30px;
  text-align: center;

  a {
    display: inline-block;
    color: #007bff;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border: 1px solid #007bff;
    border-radius: 8px;
    background-color: #f0f8ff;
    margin: 10px 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, box-shadow 0.3s;

    &:hover {
      background-color: #e6f2ff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
`;
