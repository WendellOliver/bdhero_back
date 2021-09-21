import Ong from "../models/Ong";
import OngsRepository from "../repositories/OngsRepository";

interface request{
    name: string,
    email: string,
    whatsapp: string,
    city: string,
    uf: string,
}

class CreateOngsService{

    public async execute(data:request):Promise<Ong>{

        const ongsRepository = new OngsRepository();

        const ong = await ongsRepository.create(data);

        return ong;
        
    };

}

export default CreateOngsService;