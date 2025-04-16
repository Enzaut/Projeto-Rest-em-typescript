import { Uf } from '../uf/uf.entity';
import { Estudante } from '../estudante/estudante.entity';
export declare class Cidade {
    id: number;
    nome: string;
    uf: Uf;
    estudantes: Estudante[];
}
