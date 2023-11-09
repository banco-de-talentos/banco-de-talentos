import * as S from "./styles";
import { SelectProps } from "../../types";



export const Selected = ({isselected, icon, title, description, onClick}: SelectProps) => {
  
  return(
    <S.Container onClick={onClick} isselected={isselected} >
      <S.Icon>{icon}</S.Icon>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Info>
    </S.Container>
  )
}