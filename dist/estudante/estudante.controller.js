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
exports.EstudanteController = void 0;
const common_1 = require("@nestjs/common");
const estudante_service_1 = require("./estudante.service");
const create_estudante_dto_1 = require("./dto/create-estudante.dto");
const update_estudante_dto_1 = require("./dto/update-estudante.dto");
let EstudanteController = class EstudanteController {
    estudanteService;
    constructor(estudanteService) {
        this.estudanteService = estudanteService;
    }
    create(dto) {
        return this.estudanteService.create(dto);
    }
    findAll() {
        return this.estudanteService.findAll();
    }
    findOne(id) {
        return this.estudanteService.findOne(+id);
    }
    update(id, dto) {
        return this.estudanteService.update(+id, dto);
    }
    remove(id) {
        return this.estudanteService.remove(+id);
    }
};
exports.EstudanteController = EstudanteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estudante_dto_1.CreateEstudanteDto]),
    __metadata("design:returntype", void 0)
], EstudanteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstudanteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstudanteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_estudante_dto_1.UpdateEstudanteDto]),
    __metadata("design:returntype", void 0)
], EstudanteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EstudanteController.prototype, "remove", null);
exports.EstudanteController = EstudanteController = __decorate([
    (0, common_1.Controller)('estudantes'),
    __metadata("design:paramtypes", [estudante_service_1.EstudanteService])
], EstudanteController);
//# sourceMappingURL=estudante.controller.js.map