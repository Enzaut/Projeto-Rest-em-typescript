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
exports.EstudanteService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const estudante_entity_1 = require("./estudante.entity");
const typeorm_2 = require("typeorm");
const cidade_entity_1 = require("../cidade/cidade.entity");
let EstudanteService = class EstudanteService {
    estudanteRepo;
    cidadeRepo;
    constructor(estudanteRepo, cidadeRepo) {
        this.estudanteRepo = estudanteRepo;
        this.cidadeRepo = cidadeRepo;
    }
    async create(dto) {
        const cidade = await this.cidadeRepo.findOne({ where: { id: dto.cidadeId } });
        if (!cidade)
            throw new Error('Cidade não encontrada');
        const estudante = this.estudanteRepo.create({
            nome: dto.nome,
            matricula: dto.matricula,
            email: dto.email,
            dt_nascimento: dto.dt_nascimento,
            cidade,
        });
        return this.estudanteRepo.save(estudante);
    }
    findAll() {
        return this.estudanteRepo.find({ relations: ['cidade'] });
    }
    async findOne(id) {
        const estudante = await this.estudanteRepo.findOne({ where: { id }, relations: ['cidade'] });
        if (!estudante) {
            throw new Error('Estudante não encontrado');
        }
        return estudante;
    }
    async update(id, dto) {
        const estudante = await this.estudanteRepo.findOne({ where: { id } });
        if (!estudante)
            throw new Error('Estudante não encontrado');
        if (dto.cidadeId) {
            const cidade = await this.cidadeRepo.findOne({ where: { id: dto.cidadeId } });
            if (!cidade)
                throw new Error('Cidade inválida');
            estudante.cidade = cidade;
        }
        Object.assign(estudante, dto);
        return this.estudanteRepo.save(estudante);
    }
    async remove(id) {
        const estudante = await this.estudanteRepo.findOne({ where: { id } });
        if (!estudante)
            throw new Error('Estudante não encontrado');
        await this.estudanteRepo.remove(estudante);
    }
};
exports.EstudanteService = EstudanteService;
exports.EstudanteService = EstudanteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estudante_entity_1.Estudante)),
    __param(1, (0, typeorm_1.InjectRepository)(cidade_entity_1.Cidade)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], EstudanteService);
//# sourceMappingURL=estudante.service.js.map