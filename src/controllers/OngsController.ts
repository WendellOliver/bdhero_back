import { Request, Response } from "express";
import CreateOngsService from "../services/CreateOngsService";
import FindOngByIdService from "../services/FindOngByIdService";

export default class OngsController {

    public async create(request: Request, response: Response) {

        const { name, email, whatsapp, city, uf } = request.body;

        const createOngsService = new CreateOngsService();

        const ong = await createOngsService.execute({ name, email, whatsapp, city, uf });

        return response.status(201).json({ ong });
    }

    public async findById(request: Request, response: Response) {

        const { id } = request.params;

        const findOngByIdService = new FindOngByIdService();

        const ongToken = await findOngByIdService.execute(id);

        if (!ongToken) {
            return response.status(401).json({ message: "Unauthorized acess of data" });
        }

        return response.status(200).json({ ongToken });
    }



}

