import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
export declare class CidadeController {
    private readonly cidadeService;
    constructor(cidadeService: CidadeService);
    create(dto: CreateCidadeDto): unknown;
    findAll(): Promise<Entity[]>;
    findOne(id: string): Promise<Entity | null>;
    update(id: string, dto: UpdateCidadeDto): unknown;
    remove(id: string): unknown;
}
