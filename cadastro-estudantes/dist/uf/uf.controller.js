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
exports.UfController = void 0;
const common_1 = require("@nestjs/common");
const uf_service_1 = require("./uf.service");
const create_uf_dto_1 = require("./dto/create-uf.dto");
const update_uf_dto_1 = require("./dto/update-uf.dto");
let UfController = class UfController {
    ufService;
    constructor(ufService) {
        this.ufService = ufService;
    }
    create(createUfDto) {
        return this.ufService.create(createUfDto);
    }
    findAll() {
        return this.ufService.findAll();
    }
    findOne(id) {
        return this.ufService.findOne(+id);
    }
    update(id, updateUfDto) {
        return this.ufService.update(+id, updateUfDto);
    }
    remove(id) {
        return this.ufService.remove(+id);
    }
};
exports.UfController = UfController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_uf_dto_1.CreateUfDto]),
    __metadata("design:returntype", void 0)
], UfController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UfController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UfController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_uf_dto_1.UpdateUfDto]),
    __metadata("design:returntype", void 0)
], UfController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UfController.prototype, "remove", null);
exports.UfController = UfController = __decorate([
    (0, common_1.Controller)('ufs'),
    __metadata("design:paramtypes", [uf_service_1.UfService])
], UfController);
//# sourceMappingURL=uf.controller.js.map