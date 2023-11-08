import { ChangeEvent, /* useEffect */ } from "react";
import { useNavigate } from "react-router-dom";

import { useFormContext } from "../../context/useFormContext";
import { FormStates } from "../../types";
import * as F from "./styles";

export const PageForm1 = () => {
  const { state, dispatch } = useFormContext();
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch({
  //     type: FormStates.setCurrentPage,
  //     payload: 1
  //   });
  // },[dispatch]);

  const handleNextStep = () => {
    const completeName = state.name;
    if(completeName.split(' ').length < 2 || state.email == "" ){
      alert("Preenha seu nome completo e seu e-mail!")
    } else {
      navigate('/page02');
    }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormStates.setName,
      payload: e.target.value
    });
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormStates.setEmail,
      payload: e.target.value
    });
  }

  return(
    <F.Container>
      <F.Header>
        <h4>Passo 1/3</h4>
        <h2>Queremos muito te conhecer</h2>
        <p>Preencha os campos abaixo com seu e-mail e nome completo.</p>
      </F.Header>
      <F.Label>
        <label>
          E-mail
          <input
          type="email"
          data-testid="user-email"
          value={state.email}
          onChange={handleEmailChange}  
          />
        </label>
        <label>
          Nome
          <input
            type="text"
            data-testid="user-name"
            value={state.name}
            onChange={handleNameChange}
          />
        </label>
      </F.Label>
      <F.Button onClick={handleNextStep}>Próximo</F.Button>
    </F.Container>
  )
}