import { styled } from "styled-components";

export const Container = styled.div<{selected: boolean}>`
  margin: 35px 0;
  border-radius: 10px;
  padding: 10px ;
  cursor: pointer;
  background-color: ${props => props.selected ? '#161A1D' : '#0B090A'};

  a {
      display: flex;
      align-items: center;
      text-decoration: none;
  }

`;

export const Info = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const Title = styled.div`
  text-align: right;
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 15px;
  color: #FFF;

`;

export const Description = styled.div`
  text-align: right;
  font-size: 13px;
  color: #B8B8D4;
`;

export const Icon = styled.div<{selected: boolean}>`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${props => props.selected ? '#660708' : '#0B090A'};
  display: flex;
  justify-content: center;
  align-items: center;
`;