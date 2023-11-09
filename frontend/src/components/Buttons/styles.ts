import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const BackButton = styled(Link)`
  font-size: 16px;
  padding: 20px 40px;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #B8B8D4;

  &:hover {
    color: #fff;
  }
`;

export const NextButton = styled.button`
  background-color: #660708;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border-radius: 30px;
  cursor: pointer;
  margin: 0;
  border: none;

  &:hover {
    background-color: #8c0c10;
  }
`;