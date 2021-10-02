import { Double } from "typeorm";

export default interface ICreateIncidentDTO{
    ong_id: string,
    title: string,
    description: string,
    value: string
}