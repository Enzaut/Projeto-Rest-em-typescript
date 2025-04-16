import { EstudanteService } from './estudante.service';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
export declare class EstudanteController {
    private readonly estudanteService;
    constructor(estudanteService: EstudanteService);
    create(dto: CreateEstudanteDto): Promise<import("./estudante.entity").Estudante>;
    findAll(): Promise<import("./estudante.entity").Estudante[]>;
    findOne(id: string): Promise<import("./estudante.entity").Estudante>;
    update(id: string, dto: UpdateEstudanteDto): Promise<import("./estudante.entity").Estudante>;
    remove(id: string): Promise<void>;
}
