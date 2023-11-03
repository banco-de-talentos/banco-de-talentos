
import {  createContext, Reducer, useReducer} from "react";
import { State, FormProps, FormStates, Action, ContextTypes, Level } from "../types";

const initialData: State = {
  currentPage: 0,
  name: '',
  email: '',
  github: '',
  linkedin: '',
  telefone: '',
  level: Level.Junior,
}


export const FormContext = createContext<ContextTypes | undefined>(undefined);


const formReducer: Reducer<State, Action> = (state, action) => {
  switch(action.type){
    case FormStates.setCurrentPage:
      return { ...state, currentStep: action.payload };
    case FormStates.setName:
      return {...state, name: action.payload };
    case FormStates.setEmail:
      return { ...state, email: action.payload};
    case FormStates.setGithub:
      return { ...state, github: action.payload };
    case FormStates.setLinkedin:
      return { ...state, linkedin: action.payload };
    case FormStates.setTelefone:
      return { ...state, telefone: action.payload };
    case FormStates.setLevel:
      return { ...state, level: action.payload };
    default:
      return state;
    }
}

// Provider

export const FormProvider = ({children}: FormProps) => {
  const [state, dispatch] = useReducer(formReducer, initialData);
  const value = { state, dispatch };

  return(
    <FormContext.Provider value={value}>
      { children }
    </FormContext.Provider>
  )
}
