import { ReactNode, MouseEventHandler   } from "react";

export enum FormStates {
  setCurrentPage,
  setName,
  setEmail,
  setGithub,
  setTelefone,
  setLinkedin,
  setLevel,
} 

export type State = {
  currentPage: number,
  name: string,
  email: string,
  github: string,
  telefone: string,
  linkedin: string,
  level: number,
}

export type Action = {
  type: FormStates;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

export type ContextTypes = {
  state: State;
  dispatch: (action: Action) => void;
}

export type FormProps = {
  children: ReactNode;
}

export type SelectProps = {
  isselected: boolean,
  icon: string,
  title: string,
  description: string,
  onClick: () => void;
}

export type SidebarProps = {
  icon: string,
  title: string,
  description: string,
  path: string,
  selected: boolean;
}

export type ButtonProps = {
  prevLink: string,
  onNextClick: MouseEventHandler<HTMLButtonElement>;
}