import ICreateIncidentDTO from "../../dtos/ICreateIncidentsDTO";
import Incidents from "../../models/Incidents";

export default interface IIncidentsRepository{
    createIncidents(dataIncidents:ICreateIncidentDTO):Promise<Incidents>;

}