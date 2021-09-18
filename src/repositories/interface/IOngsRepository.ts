import ICreateOngDTO from "../../dtos/ICreateOngsDTO";
import Ong from "../../models/Ong";

export default interface IOngsRepository{
    create(dataOngs:ICreateOngDTO):Promise<Ong>;
}