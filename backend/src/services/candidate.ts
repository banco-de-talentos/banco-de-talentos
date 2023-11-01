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

    static async findCandidates(searchBy: any): Promise<UserI[] | ErrorI> {

        if(!searchBy) {
            const users: UserI[] = await User.findAll();
            
            if (users.length === 0) {
                return { status: 400, message: "No candidates registered yet" };
            } else {
                return users;
            }
        }

        const found: UserI[] | ErrorI = await User.findAll({ where: { nome: searchBy } });
        if (found.length === 0) return { status: 404, message: "Candidate not found"};
        return found;
    }
/* 
    static async findCandidate(param: string, data: searchCandidateI): Promise<UserI[] | ErrorI> {

        const { error } = searchCandidateSchema.validate(data);
        if (error) throw { status: 400, message: error.message };

        const user: UserI[] | null = await User.findAll({ where: { param } });
        
        if (!user) throw { status: 404, message: "Candidate not found" }

        return user;
    } */
}