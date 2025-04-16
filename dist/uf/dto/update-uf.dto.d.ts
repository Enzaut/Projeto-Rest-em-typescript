declare const UpdateUfDto_base: import("@nestjs/mapped-types").MappedType<Exclude<T, { [K in keyof T]: T[K] extends Type ? K : never; }[keyof T]>>;
export declare class UpdateUfDto extends UpdateUfDto_base {
}
export {};
