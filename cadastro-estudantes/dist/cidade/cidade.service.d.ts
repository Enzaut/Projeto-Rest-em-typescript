import { Cidade } from './cidade.entity';
import { Repository } from 'typeorm';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Uf } from '../uf/uf.entity';
export declare class CidadeService {
    private cidadeRepository;
    private ufRepository;
    constructor(cidadeRepository: Repository<Cidade>, ufRepository: Repository<Uf>);
    create(dto: CreateCidadeDto): unknown;
    findAll(): Promise<Entity[]>;
    findOne(id: number): Promise<Entity | null>;
    update(id: number, dto: UpdateCidadeDto): unknown;
    remove(id: number): unknown;
}
