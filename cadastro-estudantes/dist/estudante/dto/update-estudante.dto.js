"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEstudanteDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_estudante_dto_1 = require("./create-estudante.dto");
class UpdateEstudanteDto extends (0, mapped_types_1.PartialType)(create_estudante_dto_1.CreateEstudanteDto) {
}
exports.UpdateEstudanteDto = UpdateEstudanteDto;
//# sourceMappingURL=update-estudante.dto.js.map