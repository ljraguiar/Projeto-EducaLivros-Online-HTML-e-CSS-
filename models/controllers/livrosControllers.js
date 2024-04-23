const express = require('express')
const router = express.Router()
const Livros = require('../models/livro/Livros')


//Lista todos os pets (Guarda todos os pets em uma variável e imprime)
router.get('/comprar', async (req, res) => {
    var id = req.params.id
    const allLivros = await Livros.findAll()
    return res.render('page/comprar', { Livros: allLivros })
})

//Lista todos os pets (Guarda todos os pets em uma variável e imprime)
router.get('/livro/compra/:id', async (req, res) => {

    const allLivros = await Livros.findAll()
    return res.render('page/compra', { Livros: allLivros })
})


//cadastro 
router.post('/livro/save', (req, res) => {
    var nome_livro = req.body.nome_livro
    var preco = req.body.preco
    var data_livro = req.body.data_livro
    var descricao = req.body.descricao

    Livros.create({
        nome_livro: nome_livro,
        preco: preco,
        data_livro: data_livro,
        descricao: descricao,
    }).then(function () {
        res.redirect('/comprar')
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})



//Salva o pet no banco de dados
router.post('/cadastro/livro', (req, res) => {
    var nome_livro = req.body.nome_livro
    var preco = req.body.preco
    var data_livro = req.body.data_livro
    var descricao = req.body.descricao

    Livros.create({
        nome_livro: nome_livro,
        preco: preco,
        data_livro: data_livro,
        descricao: descricao,
    }).then(function () {
        res.redirect('/comprar')
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})

//Atualizar Pet
router.post('/livro/update', (req, res) => {
    var id= req.body.id
    var nome_livro = req.body.nome_livro
    var preco = req.body.preco
    var data_livro = req.body.data_livro
    var descricao = req.body.descricao

    Livros.update({
        nome_livro: nome_livro,
        preco: preco,
        data_livro: data_livro,
        descricao: descricao,
    },{
        where: {id : id}
    }).then(function () {
        res.redirect('/comprar')
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})

router.get('/livro/edit/:id', (req, res) => {
    var id = req.params.id
    
    Livros.findOne({
        where: { id : id }
    }).then(livro => {
        
        res.render('page/edit', {livro : livro})
    })

})

router.get('/livro/compra/:id', (req, res) => {
    res.render('page/compra')
})

router.get('/livro/excluir/:id', (req, res) => {
    var id = req.params.id

    Livros.destroy({
        where: { id : id }
    }).then(() => {
        res.redirect('/home')
    })
})


//-----------------ROTAS----------------------

//Cadastro pet
router.get('/cadastro_livro', (req, res) => {
    res.render('page/cadastro_livro')
})

//main
router.get('/livro', (req, res) => {
    res.render('page/livro')
})



module.exports = router