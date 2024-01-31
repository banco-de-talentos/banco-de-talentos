import { useEffect } from "react";
import { Global } from "../../components/Global";
import { Buttons } from "../../components/Buttons";
import { useFormContext } from "../../context/useFormContext";
import * as F from "./styles";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { FormStates } from "../../types";


export const PageForm3 = () => {
  const {state, dispatch } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(state.name === ''){
      navigate('/')
    } else {
      dispatch({
        type: FormStates.setCurrentPage,
        payload: 3
      });
    }
  }, []);


  const handleNextStep = () => {
    if(state.linkedin !== '' && state.github !== '' && state.telefone !== '') {
      navigate('/page04');
      console.log(state);
    } else {
        alert("Preencha os dados");
    }
  }

  const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormStates.setGithub,
      payload: e.target.value
    });
  }

  const handleLinkedinChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormStates.setLinkedin,
      payload: e.target.value
    });
  }
  
  const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormStates.setTelefone,
      payload: e.target.value
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
        <p>Passo 3/3</p>
        <h1>{firstName()}, agora queremos ver os seus projetos e suas principais stacks.</h1>
        <p>Nos informe os dados requeridos abaixo. Todos os dados são importantes para você destacar no processo seletivo!</p>

        <hr />

        <label>
          Github
          <input
            data-testid="github"
            type="text"
            // autoFocus
            value={state.github}
            onChange={handleGithubChange}
          />
        </label>
        <label htmlFor="">
          LinkedIn
          <input
            data-testid="linkedin"
            type="text"
            // autoFocus
            value={state.linkedin}
            onChange={handleLinkedinChange}
          />
        </label>
        <label>
          Telefone
          <input
          data-testid="telefone"
            type="text"
            // autoFocus
            value={state.telefone}
            onChange={handleTelefoneChange}
          />
        </label>
        <Buttons prevLink="/page02" onNextClick={handleNextStep}/>
      </F.Container>
    </Global>
  )
}