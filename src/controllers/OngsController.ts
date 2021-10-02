import { Request, Response } from "express";
import { getRepository } from "typeorm";
import OngsRepository from "../repositories/OngsRepository";
import CreateOngsService from "../services/CreateOngsService";

export default class OngsController{

    public async create(request: Request, response: Response){

        const {name, email, whatsapp, city, uf} = request.body;
        
        const createOngsService = new CreateOngsService();

        const ongs = createOngsService.execute({name, email, whatsapp, city, uf});

        return response.status(201).json(ongs);
    }



    }

