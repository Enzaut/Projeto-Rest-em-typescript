import { Estudante } from './estudante.entity';
import { Repository } from 'typeorm';
import { CreateEstudanteDto } from './dto/create-estudante.dto';
import { UpdateEstudanteDto } from './dto/update-estudante.dto';
import { Cidade } from '../cidade/cidade.entity';
export declare class EstudanteService {
    private estudanteRepo;
    private cidadeRepo;
    constructor(estudanteRepo: Repository<Estudante>, cidadeRepo: Repository<Cidade>);
    create(dto: CreateEstudanteDto): Promise<Estudante>;
    findAll(): Promise<Estudante[]>;
    findOne(id: number): Promise<Estudante>;
    update(id: number, dto: UpdateEstudanteDto): Promise<Estudante>;
    remove(id: number): Promise<void>;
}
