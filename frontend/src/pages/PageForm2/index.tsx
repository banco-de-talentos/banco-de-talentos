import { useEffect } from "react";
import { useFormContext } from "../../context/useFormContext";
import { Global } from "../../components/Global"
import * as F from "./styles";
import { useNavigate } from "react-router-dom";
import { FormStates } from "../../types";
import { Selected } from "../../components/Selected";
// import { MdKeyboardDoubleArrowLeft as Arrow } from "react-icons/md"
import { Buttons } from "../../components/Buttons";

export const PageForm2 = () => {
  const {state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.name === ''){
      navigate('/')
    } else {
      dispatch({
        type: FormStates.setCurrentPage,
        payload: 2
      });
    }
  },[]);
  

  const handleNextStep = () => {
    state.name !== "" ? navigate('/page3') : alert("Preencha o seus dados!");
  }
  
  const setLevel = (level: number) => {
    dispatch({
      type: FormStates.setLevel,
      payload: level
    });
  }

  const firstName = () => {
    const complete = state.name;
    const first = complete.split(" ");
    return first[0];
  }

  return(
    <Global>
      <F.Container>
        <p>Passo 2/3</p>
        <h1>{ firstName() }, agora selecione o seu nível.</h1>
        <p>Selecione o campo que corresponde ou que chegue mais perto do seu tempo na área de tecnologia.</p>

        <hr />

        <Selected
          data-testid="junior-button" 
          onClick = {() => setLevel(0)}
          isselected={state.level === 0}
          icon = "🥳"
          title = "Júnior"
          description = "Sou desenvolvedor com um ano ou menos de mercado"
        />

        <Selected
          data-testid="pleno-button" 
          isselected={state.level === 1}
          icon = "😎"
          title = "Pleno"
          description = "Sou desenvolvedor com dois ou mais anos de mercado"
          onClick = {() => setLevel(1)}
        />

        <Selected
          data-testid="senior-button" 
          isselected={state.level === 2}
          icon = "🥸"
          title = "Sênior"
          description = "Sou desenvolvedor com cinco ou mais anos de mercado"
          onClick = {() => setLevel(2)}
        />

        <Buttons prevLink="/" onNextClick={handleNextStep}/>
      </F.Container>
    </Global>
  )
}