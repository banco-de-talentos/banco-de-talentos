interface UserI {
    id?: number;
    nome: string;
    email: string;
    level: number;
    linkedin: string;
    github: string;
    telefone: string;
    portfolio?: string; 
    currículo?: string; 
    createdAt?: Date;
    updatedAt?: Date;
}

interface ErrorI {
    status: number;
    message: string;
}

export { UserI, ErrorI };