import { candidateS } from "../services/candidate";
import { UserI, ErrorI } from '../Interfaces/UserI'
import { Request, Response } from "express";

export class candidate  {
    static async createCandidate(request: Request, response: Response): Promise<object> {
        const user: UserI = request.body;
        try {
            const created: ErrorI | UserI = await candidateS.createCandidate(user);
            return response.status(201).json(created);
        } catch(error: any) {
            const { status, message } = error;
            return response.status(400).json(message);
        }

    }

    static async findCandidate(request: Request, response: Response): Promise<object | UserI[]> {

        const { user } = request.query;
        
        
        const users: UserI[] | UserI | any = await candidateS.findCandidate(user);
    
        const { status, message } = users;

        if(status){
            return response.status(status).json(message);
        }
        return response.status(200).json(users);
}
 
    static async findCandidates(_request: Request, response: Response): Promise<object> {
        try {
            const found: UserI[] | ErrorI = await candidateS.findCandidates();
            return response.status(200).json(found);
        } catch(error: any) {
            const { status, message } = error;
            return response.status(status).json(message);
        }
    }
}
