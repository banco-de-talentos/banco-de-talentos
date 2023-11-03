import { ReactNode, /* MouseEventHandler */  } from "react";

export enum FormStates {
  setCurrentPage,
  setName,
  setEmail,
  setGithub,
  setTelefone,
  setLinkedin,
  setLevel,
} 

export enum Level {
  Junior = "Junior",
  Pleno = "Pleno",
  Senior = "Senior",
}

export type State = {
  currentPage: number,
  name: string,
  email: string,
  github: string,
  telefone: string,
  linkedin: string,
  level: Level,
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