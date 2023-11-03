import { ReactNode, /* MouseEventHandler */  } from "react";

export enum FormStates {
  setCurrentPage,
  setName,
  setEmail,
  setLevel,
  setLinkedin,
  setGithub,
  setTelefone,
} 

export enum Level {
  Junior = 0,
  Pleno = 1,
  Senior = 2,
}

export type State = {
  currentPage: number,
  name: string,
  email: string,
  level: Level,
  linkedin: string,
  github: string,
  telefone: string,
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

// export type SelectProps = {
//   icon: string,
//   title: string,
//   description: string,
//   onClick: () => void;
//   level: Level;
// }

// export type SidebarProps = {
//   icon: string,
//   title: string,
//   description: string,
//   path: string,
//   selected: boolean;
// }

// export type ButtonProps = {
//   prevLink: string,
//   onNextClick: MouseEventHandler<HTMLButtonElement>;
// }