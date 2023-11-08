import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color:  #0b090a;
`;

export const Header = styled.div`
  h4 {
    color: #B8B8D4;
    font-size: 13px;
  }

  h2{
    color: #fff;
  }

  p {
  font-size: 13px;
  color: #B8B8D4;
}

`;

export const Label = styled.div`
  label {
    font-size: 13px;
    display: block;
    

    input {
        display: block;
        margin-top: 7px;
        box-sizing: border-box;
        width: 100%;
        padding: 20px 10px;
        border: 2px solid #660708;
        border-radius: 10px;
        color: #FFF;
        outline: 0;
        font-size: 15px;
        background-color: #0b090a;
    }
  }

  label:not(:last-child) {
    margin-bottom: 20px;
  }
`;


export const Button = styled.button`
  background-color: #660708;
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  padding: 20px 40px;
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #8c0c10;
  }
`;
