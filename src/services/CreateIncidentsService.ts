import { Double } from "typeorm";
import Incidents from "../models/Incidents";
import IncidentsRepository from "../repositories/IncidentsRepository";

interface request {
    ong_id: string,
    title: string,
    description: string,
    value: string
}

class CreateIncidentsService {

    public async execute(data: request): Promise<Incidents> {

        const incidentsRepository = new IncidentsRepository();

        const incident = await incidentsRepository.createIncidents(data);

        return incident;

    };

}

export default CreateIncidentsService;