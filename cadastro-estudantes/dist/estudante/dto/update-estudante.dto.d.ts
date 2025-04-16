declare const UpdateEstudanteDto_base: import("@nestjs/mapped-types").MappedType<Exclude<T, { [K in keyof T]: T[K] extends Type ? K : never; }[keyof T]>>;
export declare class UpdateEstudanteDto extends UpdateEstudanteDto_base {
}
export {};
