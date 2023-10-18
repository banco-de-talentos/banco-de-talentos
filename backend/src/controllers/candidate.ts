import { candidateS } from "../services/candidate";

import { UserI, ErrorI } from '../Interfaces/UserI'
import { Request, Response } from "express";

export class candidate  {
    static async createCandidate(request: Request, response: Response): Promise<Object> {

        const user: UserI = request.body;
        const created: UserI | ErrorI = await candidateS.createCandidate(user);
        
        return response.status(201).json(created);
        
    }

    static async findAllCandidates(_request: Request, response: Response): Promise<object | UserI[]> {
        const users: UserI[] | ErrorI = await candidateS.findAllCandidates();
        return response.status(200).json(users);
    }

    static async findOneCandidate(data: UserI): Promise<UserI | ErrorI> {
        const user: UserI | ErrorI = await candidateS.findOneCandidate(data)

        return user;
    }
}
