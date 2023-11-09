import { MdKeyboardDoubleArrowLeft as Arrow } from 'react-icons/md';
import * as C from './styles' ;
import { ButtonProps } from '../../types';


export const Buttons = ({ prevLink, onNextClick }: ButtonProps) => {
  return (
    <C.ButtonsContainer>
      <C.BackButton to={prevLink}>
        <Arrow fontSize="23px" />
        Voltar
      </C.BackButton>
      <C.NextButton onClick={onNextClick}>Próximo</C.NextButton>
    </C.ButtonsContainer>
  );
};