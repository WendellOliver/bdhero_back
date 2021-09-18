import { Request, Response } from "express";
import CreateOngsService from "../services/CreateOngsService";

export default class OngsController{

    public async create(request: Request, response: Response){

        const {id, name, email, whatsapp, city, uf} = request.body;
        
        const createOngsService = new CreateOngsService();

        const ongs = createOngsService.execute({name, email, whatsapp, city, uf});

        return response.status(201).json();
    }

}