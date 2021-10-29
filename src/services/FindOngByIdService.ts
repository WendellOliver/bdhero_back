import authConfig from "../config/auth";
import { sign } from "jsonwebtoken";
import OngsRepository from "../repositories/OngsRepository";


interface IResponse {

    name: string,
    token: string

};

class FindOngByIdService {

    public async execute(id: string): Promise<IResponse | undefined> {

        const ongsRepository = new OngsRepository();

        const ong = await ongsRepository.FindOneById(id);

        if (ong) {

            const { secret, expiresIn } = authConfig.jwt;

            const token = sign({}, secret, {
                subject: ong.id,
                expiresIn,
            });

            return {
                name: ong.name,
                token,
            };
        }
    }
}
export default FindOngByIdService;