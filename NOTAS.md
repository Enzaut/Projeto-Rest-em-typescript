# 📘 Projeto: Cadastro de Estudantes (NestJS + TypeORM + REST Client)

INTEGRANTES-- Enzo Gomide Martins UC2310535, Felipe Nascimento Vitelli Peixoto UC23200011, Caian Dieter Passos UC232056, Caio Rafael Alves de Sousa UC23102609, Arthur Almirante Simões UC23102609



- Conceitos Abordados

- Criação de APIs com **NestJS**
- Mapeamento Objeto-Relacional com **TypeORM**
- Organização de código em **módulos, serviços, controllers e entidades**
- Uso de **DTOs (Data Transfer Objects)** para entrada de dados
- Testes de API com **REST Client** do VS Code
- Boas práticas REST: separação de responsabilidades, tratamento de erros, verbos HTTP corretos

---

## Entidades Criadas

### `Uf`

- `id: number`
- `nome: string`
- `sigla: string`
- ➕ Relacionamento com **Cidade**: `@OneToMany`

---

### `Cidade`

- `id: number`
- `nome: string`
- `ufId: number` (chave estrangeira)
- ➕ Relacionamento:
  - `@ManyToOne` com `UF`
  - `@OneToMany` com `Estudante`

---

### `Estudante`

- `id: number`
- `nome: string`
- `matricula: string`
- `email: string`
- `dt_nascimento: string`
- `cidadeId: number` (chave estrangeira)
- ➕ Relacionamento: `@ManyToOne` com `Cidade`

---

## Comandos Importantes Utilizados

```bash
# Criar o projeto NestJS
nest new cadastro-estudantes

# Criar módulos/resources
nest g resource uf
nest g resource cidade
nest g resource estudante

# Rodar projeto
npm install
npm run start:dev
