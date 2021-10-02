import { getRepository, Repository } from "typeorm";
import ICreateIncidentDTO from "../dtos/ICreateIncidentsDTO";
import Incidents from "../models/Incidents";
import IIncidentsRepository from "./interface/IIncidentsRepository";

class IncidentsRepository implements IIncidentsRepository {

    private ormRepository:Repository<Incidents>


    constructor(){
        this.ormRepository = getRepository(Incidents);
    }

    async createIncidents(dataIncidents: ICreateIncidentDTO): Promise<Incidents> {

        const incident = this.ormRepository.create(dataIncidents);
    
        await this.ormRepository.save(incident);
    
        return incident;
    }




}

export default IncidentsRepository;