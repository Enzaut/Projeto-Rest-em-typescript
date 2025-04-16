Notas do Projeto

INTEGRANTES-- Enzo Gomide Martins UC2310535, Felipe Nascimento Vitelli Peixoto UC23200011, Caian Dieter Passos UC232056, Caio Rafael Alves de Sousa UC23102609, Arthur Almirante Simões UC23102609


Projeto 1 - Antes da Conexão com o Banco

Antes de conectar com o banco de dados, nosso projeto era basicamente um CRUD rodando na memória. Usamos TypeScript para estruturar bem o código e manter a tipagem forte. Algumas práticas aplicadas:

Modularização: Separação das funcionalidades em arquivos distintos (serviços e modelos).

Persistência em Memória: Dados armazenados em arrays locais simulando um banco de dados temporário.

Interfaces e Tipos Personalizados: Criamos interfaces para definir contratos dos objetos, garantindo que as funções recebam e retornem os tipos corretos além de facilitar no cadastro de categorias em pedidos por exemplo.

Classes e Herança: Definimos classes para representar entidades, aplicando modificadores de acesso como private e public.

Enums: Utilizamos para mapear estados específicos, como categorias de produtos.


Configuração do tsconfig.json

Ativamos strict para garantir maior segurança com a tipagem.

Configuramos moduleResolution para node, facilitando a importação de módulos(ajudou muito).



Projeto 2 - Após a Conexão com o Banco

Agora o projeto está integrado com um banco de dados MySQL usando TypeORM. Isso significa que os dados não são mais voláteis e podem ser armazenados permanentemente. Aqui estão as principais mudanças:

Banco de Dados:

Substituímos os arrays em memória por tabelas no MySQL.

Criamos entidades com decorators do TypeORM (@Entity, @PrimaryGeneratedColumn, @Column, etc.).

Configuramos um DataSource para conectar o TypeORM ao banco.

Operações CRUD:

Agora usamos repository para acessar e manipular os dados no banco.

Métodos find, save, update e delete foram implementados.

Queries para garantir desempenho e evitar problemas de concorrência.

Módulos e Estrutura:

Os serviços foram atualizados para chamar o banco em vez de trabalhar apenas com listas.

Melhor organização dos arquivos para facilitar manutenção.



Bibliotecas Utilizadas

O projeto usa algumas dependências essenciais para funcionar corretamente:

TypeORM → ORM que o senhor pediu para usar.

MySQL2 → Driver necessário para conectar o MySQL ao Node.js, pensei em usar o postman mas isso seria fora do terminal então preferi continuar nesse arquivo.

Inquirer → Biblioteca para criar menus interativos no terminal, essa biblioteca eu descobri vendo outros projetos do mesmo tipo.

dotenv → Permite carregar variáveis de ambiente de um arquivo .env.

ts-node → Permite rodar TypeScript diretamente no Node.js sem necessidade de compilar manualmente(Ajuda MUITO).
