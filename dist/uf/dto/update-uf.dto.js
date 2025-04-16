"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUfDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_uf_dto_1 = require("./create-uf.dto");
class UpdateUfDto extends (0, mapped_types_1.PartialType)(create_uf_dto_1.CreateUfDto) {
}
exports.UpdateUfDto = UpdateUfDto;
//# sourceMappingURL=update-uf.dto.js.map