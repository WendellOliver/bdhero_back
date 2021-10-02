import ICreateOngDTO from "../../dtos/ICreateOngsDTO";
import Ong from "../../models/Ong";

export default interface IOngsRepository{
    createOng(dataOngs:ICreateOngDTO):Promise<Ong>;

}