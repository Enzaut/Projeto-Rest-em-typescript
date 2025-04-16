declare const UpdateCidadeDto_base: import("@nestjs/mapped-types").MappedType<Exclude<T, { [K in keyof T]: T[K] extends Type ? K : never; }[keyof T]>>;
export declare class UpdateCidadeDto extends UpdateCidadeDto_base {
}
export {};
