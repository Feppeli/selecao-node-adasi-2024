# Escopo do Projeto

## Objetivo:
Desenvolver uma API RESTful em Node.js para gerenciar cursos, estudantes, tarefas e atividades, incluindo funcionalidades específicas de agendamento de atividades, seguindo regras de negócio precisas.

## Tecnologias:
- **Backend**: Node.js com Express ou NestJS.
- **Banco de Dados**: PostgreSQL.
- **ORM/Query Builder**: Sequelize, TypeORM (para NestJS) ou outra biblioteca de preferência do candidato.
- **Migrations**: Ferramenta de migrations do ORM escolhido.

# Requisitos Funcionais

1. **CRUD de Cursos**:
   - Atributos: \`id\` (UUID), \`nome\` (string).
   - Rotas: Criar, listar, atualizar e deletar cursos.

2. **CRUD de Estudantes**:
   - Atributos: \`cpf\` (string, único), \`nome\` (string), \`curso\` (relacionado a Cursos), \`matrícula\` (string, único).
   - Rotas: Criar, listar, atualizar e deletar estudantes.

3. **CRUD de Tarefas**:
   - Atributos: \`id\` (UUID), \`nome\` (string).
   - Rotas: Criar, listar, atualizar e deletar tarefas.

4. **CRUD de Atividades**:
   - Atributos: \`id\` (UUID), \`tarefa\` (relacionado a Tarefas), \`estudante\` (relacionado a Estudantes), \`data\` (date), \`hora agendamento inicio\` (time), \`hora agendamento término\` (time), \`hora início\` (time, opcional), \`hora término\` (time, opcional).
   - Rotas: Criar, listar, atualizar e deletar atividades. Incluir rotas para iniciar e finalizar uma atividade (modificar \`hora início\` e \`hora término\`).

5. **Regras de Agendamento**:
   - A duração da atividade não pode ultrapassar 6 horas.
   - Data e hora de término não podem ser anteriores à data e hora de início.
   - Uma atividade só pode ser iniciada com uma tolerância de 15 minutos para mais ou para menos.
   - Uma atividade pode ser encerrada a qualquer momento após o início.

# Requisitos Não Funcionais

1. **Segurança**: Implementar medidas básicas de segurança, como validação de entradas para prevenir injeção SQL.
2. **Documentação**: Documentar as rotas da API com Postman ou similar.
3. **Código e Estrutura do Projeto**: Código limpo, bem organizado e seguindo as melhores práticas de desenvolvimento em Node.js.

# Entrega

- Código-fonte em um repositório Git (privado ou público, conforme preferência da organização).
- Instruções de configuração e execução do projeto, incluindo como rodar as migrations e os testes.

## Prazo de Entrega Inicial:
O prazo de entrega para o projeto é de 7 dias a partir da data de recebimento deste teste. Acreditamos que esse prazo é suficiente para concluir as tarefas propostas, considerando um planejamento e gestão de tempo eficazes.

## Solicitação de Extensão de Prazo:
Entendemos que imprevistos podem ocorrer e que cada desenvolvedor tem um ritmo de trabalho. Caso precise de mais tempo para concluir o projeto, é possível solicitar uma extensão do prazo. No entanto, pedimos que nos informe até o 6º dia do prazo inicial, incluindo um argumento sólido que justifique a necessidade de mais tempo.


# INSTALAÇÃO

- Primeiro realize o clone da aplicação.
- o próximo passo agora é realizar a instalação de todas as dependencias bibliotecas e o framework escolhido. Para isso pasta usar o seguinte código no root da aplicação: npm install.

- após esses passo vocÊ deve criar um banco de dados. O banco de dados desta aplicação como padrão está utilizando o nome Adasi_test.
   - dentro do arquivo .env você encontrará as variáveis para realizar a configuração entre o seu banco de dados e a aplicação. 

- O próximo passo é verificar se a aplicação está funcionando. para isso basta iniciar o servidor local utilizando o código npm run start.
   - como padrão a aplicação criará um servidor no seguinte endereço local: http://localhost:3000.
   - lembrando que além de ter um arquivo para importar todas as requisições através do *Insomnia* a aplicação também tem documentação realizada no Swagger que pode er acessada através do seguinte endereço : http://localhost:3000/doc/

- Após iniciar o servidor o banco de dados irá se configurar automáticamente.
   - a sicronização das models no banco de dados utilizando o Sequelize vai criar todas as tabelas já configuradas no caso do banco de dados não ter as tabelas configuradas dentro do models.
   Então de preferência que após criar o banco de Dados, não gerar nenhuma tabela.


<br/> 

# Tecnologias 🤖

### Linguagens Frameworks e libs
- Javascript
- Express.js
- Sequelize
- Postgres
- Swagger

### Softwares
- VsCode
- Insomnia
- Beekeper


<br/>
<br/>
<br/>
Desenvolvido com ❤️por Felipe Teixeira