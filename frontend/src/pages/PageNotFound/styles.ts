import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #1C1719;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div{
    margin: 0;
    margin-bottom: 60px;
  }

  h1{
    color: #B8B8D4;
    font-size: 100px;
    margin-bottom: 10px;
  }

  h2{
    margin: 0;
    color:  #B8B8D4;
  }
`;

export const Button = styled.button`
  background-color: #660708;
  padding: 20px 40px;
  border-radius: 10px;
  cursor: pointer;
  border-color: transparent;
  box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.1);

  &:hover {
    background-color: #8c0c10;
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
