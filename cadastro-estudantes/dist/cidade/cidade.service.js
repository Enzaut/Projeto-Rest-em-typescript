"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CidadeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cidade_entity_1 = require("./cidade.entity");
const typeorm_2 = require("typeorm");
const uf_entity_1 = require("../uf/uf.entity");
let CidadeService = class CidadeService {
    cidadeRepository;
    ufRepository;
    constructor(cidadeRepository, ufRepository) {
        this.cidadeRepository = cidadeRepository;
        this.ufRepository = ufRepository;
    }
    async create(dto) {
        const uf = await this.ufRepository.findOne({ where: { id: dto.ufId } });
        if (!uf)
            throw new Error('UF não encontrada');
        const cidade = this.cidadeRepository.create({
            nome: dto.nome,
            uf: uf,
        });
        return this.cidadeRepository.save(cidade);
    }
    findAll() {
        return this.cidadeRepository.find({ relations: ['uf'] });
    }
    findOne(id) {
        return this.cidadeRepository.findOne({ where: { id }, relations: ['uf'] });
    }
    async update(id, dto) {
        const cidade = await this.cidadeRepository.findOne({ where: { id } });
        if (!cidade)
            throw new Error('Cidade não encontrada');
        if (dto.ufId) {
            const uf = await this.ufRepository.findOne({ where: { id: dto.ufId } });
            if (!uf)
                throw new Error('UF não encontrada');
            cidade.uf = uf;
        }
        cidade.nome = dto.nome ?? cidade.nome;
        return this.cidadeRepository.save(cidade);
    }
    async remove(id) {
        const cidade = await this.cidadeRepository.findOne({ where: { id } });
        if (!cidade)
            throw new Error('Cidade não encontrada');
        return this.cidadeRepository.remove(cidade);
    }
};
exports.CidadeService = CidadeService;
exports.CidadeService = CidadeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cidade_entity_1.Cidade)),
    __param(1, (0, typeorm_1.InjectRepository)(uf_entity_1.Uf)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], CidadeService);
//# sourceMappingURL=cidade.service.js.map