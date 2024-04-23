const bd_livro = require('../livro/bd_livro')

const Livros = bd_livro.sequelize.define('livro', {
    nome_livro: {
        type: bd_livro.Sequelize.STRING
    },
    preco: {
        type: bd_livro.Sequelize.STRING
    },
    data_livro: {
        type: bd_livro.Sequelize.DATE
    },
    descricao: {
        type: bd_livro.Sequelize.TEXT
    }
})

//Criar a tabela
//Livros.sync({force: true})

module.exports = Livros
