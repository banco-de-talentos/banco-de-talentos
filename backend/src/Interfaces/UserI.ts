interface UserI {
    id?: number;
    nome: string;
    email: string;
    level: number;
    linkedin: string;
    github: string;
    telefone: number;
    portfolio?: string; 
    currículo?: string; 
    createdAt?: Date;
    updatedAt?: Date;
}

interface searchCandidateI {
    nome: string;
    email: string;
    github: string;
    telefone: number;
  }

interface ErrorI {
    status: number;
    message: string;
}

export { UserI, searchCandidateI, ErrorI };