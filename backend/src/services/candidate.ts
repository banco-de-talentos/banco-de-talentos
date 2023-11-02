import { candidateSchema } from '../utils/validate';
import { UserI, ErrorI } from '../Interfaces/UserI'
import User from '../models/User';

export class candidateS {
    static async createCandidate(data: UserI): Promise<UserI | ErrorI> {
        const { nome, email, level, linkedin, github, telefone, portfolio } = data;

        const { error } = candidateSchema.validate(data);
        if (error) throw { status: 400, message: error.message };

        const exists: UserI | null = await User.findOne({ where: { email, nome, telefone, linkedin, github } });
        if (exists) throw { status: 400, message: "Usuário já cadastrado" };

        const user: UserI | null = await User.create({ nome, email, level, linkedin, github, telefone, portfolio })
        return user
    }


    static async findCandidate(param: any): Promise<UserI | UserI[] | ErrorI> {

        const found: UserI | UserI[] | ErrorI = await User.findAll({ where: { nome: param } });

        if (!found) return { status: 404, message: "Candidate not found" };
        return found;
    }

    static async findCandidates(): Promise<UserI[] | ErrorI> {
        const users: UserI[] = await User.findAll();

        if (users.length === 0) return { status: 400, message: "No candidates registered yet" };
        return users;
    
    }
}