"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCidadeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cidade_dto_1 = require("./create-cidade.dto");
class UpdateCidadeDto extends (0, mapped_types_1.PartialType)(create_cidade_dto_1.CreateCidadeDto) {
}
exports.UpdateCidadeDto = UpdateCidadeDto;
//# sourceMappingURL=update-cidade.dto.js.map