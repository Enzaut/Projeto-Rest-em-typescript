import { Repository } from 'typeorm';
import { Uf } from './uf.entity';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
export declare class UfService {
    private readonly ufRepository;
    constructor(ufRepository: Repository<Uf>);
    create(createUfDto: CreateUfDto): Promise<Uf>;
    findAll(): Promise<Uf[]>;
    findOne(id: number): Promise<Uf>;
    update(id: number, updateUfDto: UpdateUfDto): Promise<Uf>;
    remove(id: number): Promise<void>;
}
