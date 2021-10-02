import { Request, Response } from "express";
import CreateIncidentsService from "../services/CreateIncidentsService";

export default class IncidentsController{

    public async create(request:Request, response:Response){

    const {ong_id, title, description, value} = request.body;

    const createIncidentsService = new CreateIncidentsService()

    const incidents = createIncidentsService.execute({ong_id, title, description, value});

    return response.status(201).json(incidents)

    };

};