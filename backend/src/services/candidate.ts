import { UserI, ErrorI } from '../Interfaces/UserI'
import User from '../models/User';

export class candidateS {
    static async createCandidate(data: UserI): Promise<UserI | ErrorI> {
        const { nome, email, level, linkedin, github, telefone, portfolio } = data;
        const user: UserI | null = await User.create({ nome, email, level, linkedin, github, telefone, portfolio })
        if(user) {
            return user;
        } else {
           return { status: 400, message: "mensagem de erro" } // Ajustar com Joi
        }
    }

    static async findAllCandidates(): Promise<UserI[] | ErrorI> {
        const users: UserI[] = await User.findAll();
        if(users.length === 0) {
            return { status: 400, message: "No candidates registered yet" }
        } else {
            return users;
        }
    }

    static async findOneCandidate(data: UserI): Promise<UserI | ErrorI> {
        const { email } = data;
        const user: UserI | null = await User.findOne({ where: { email } })
        if (user) {
            return user;
        } else {
            return { status: 400, message: "Candidate not found" }
        }
    }
}