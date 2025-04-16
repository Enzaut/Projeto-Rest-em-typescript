import { UfService } from './uf.service';
import { CreateUfDto } from './dto/create-uf.dto';
import { UpdateUfDto } from './dto/update-uf.dto';
export declare class UfController {
    private readonly ufService;
    constructor(ufService: UfService);
    create(createUfDto: CreateUfDto): Promise<import("./uf.entity").Uf>;
    findAll(): Promise<import("./uf.entity").Uf[]>;
    findOne(id: string): Promise<import("./uf.entity").Uf>;
    update(id: string, updateUfDto: UpdateUfDto): Promise<import("./uf.entity").Uf>;
    remove(id: string): Promise<void>;
}
