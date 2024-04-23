# 📚 Livraria EducaLivros ❤️

Este projeto está sendo desenvolvido para a disciplina de Programação Web Mobile, ministrada na Universidade Católica de Pernambuco (UNICAP).

## 📝 Visão Geral

Aplicação desenvolvida para compras de livros online e para exercer funções como e-commerce.

- [Descrição](#descrição)
- [Tecnologias Utilizadas](#tecnologias)
- [Modelagem](#modelagem)
- [PPT](#ppt)
- [Como Executar](#executar)

## Descrição

Este projeto é relacionado à educação infanto-juvenil e possui uma biblioteca com empréstimo e venda de livros de diversos gêneros. Também possui um e-commerce de produtos/serviços relacionados à educação, junto com uma parte para o usuário registrar o seu feedback.

Algumas das funções que estão sendo implementadas são:

- Visualizar livros
- Comprar livros online
- E-commerce

## Tecnologias

| Tecnologia | Versão |
|------------|--------|
| Node.js | 18.12 |
| Express | 4.19.2 |
| Body-parser | 3.1.10 |
| EJS | 3.1 |
| Bcrypt | 5.1.1 |
| MySQL2 | 3.9.4 |
| Sequelize | 6.37.3 |

- **Node.js:** É um software de código aberto, multiplataforma que permite a execução de códigos JavaScript fora de um navegador web.
- **Express:** É um framework para Node.js que fornece recursos mínimos para construção de servidores web.
- **Body-parser:** É um módulo capaz de converter o body da requisição para vários formatos.
- **EJS:** É uma engine de visualização, com ele conseguimos de uma maneira fácil e simples transportar dados do back-end para o front-end.
- **Bcrypt:** É um método de criptografia do tipo hash para senhas baseado no Blowfish.
- **MySQL2:** É a linguagem de pesquisa declarativa padrão para banco de dados relacional.
- **Sequelize:** É um ORM (Object/Relational Mapper) baseado em Promise para Node.js e io.js.

## Modelagem

![Diagrama de Atividades - Livraria]()

## PPT



## Executar
Para executar o código você precisa baixar as dependências:

```bash
npm install
```

Para baixar o banco de dados do livro em sua máquina você precisa adicionar esse comando na linha da classe Livros.js:

```bash
Livros.sync({force: true})
```

Para baixar o banco de dados do User em sua máquina você precisa adicionar esse comando na linha da classe User.js:
```bash
User.sync({force: true})
```