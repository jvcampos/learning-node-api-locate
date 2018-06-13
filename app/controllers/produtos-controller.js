var Sequelize = require('sequelize');

var Op = Sequelize.Op;

var Produto = require('../../models/produto').Produto;
var session = require('../middleware/auth-check');

// Pages Forms
exports.formProcurarProduto = async (req, res, next) => { // Formulário para procurar produto
    // await auth.sessionToken(req, res, next);
    res.render('produtos/procurar_produto');
}

exports.formAddProduto = async (req, res, next) => { // Formulário para adicionar novo produto
    // await auth.sessionToken(req, res ,next);
    res.render('produtos/add_produto');
}

exports.formBuscaAlteracao = async (req, res, next) => { // Formulário para adicionar novo produto
    // await auth.sessionToken(req, res, next);
    try {
        const { id } = req.params
        const produto = await Produto.findAll({
            where: {
                id: id
            }
        });

        res.render('produtos/alterar_produto', {
            produto: produto
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            code: 'FORM_ALTERAR_PRODUTO_ERROR',
            message: 'Não foi possível encontrar esse produto !!',
            err: `${err}`
        })
    }
};

// Get's 

exports.getTodos =  async (req, res, next) => { // Buscar Todos
        const produtos = await Produto.findAll();
        res.render('produtos/produtos', {
            produtos: produtos
        });
     
        res.json({
            success: false,
            code: 'BUSCAR_TODOS_PRODUTOS_ERROR',
            message: 'Não foi possível buscar todos os produtos !!',
            err: `${err}`
        })
    
}

exports.getId = async (req, res, next) => { // Buscar por id
    try {
        const { id } = req.params.id
        const produto = await Produto.findById(id);
        
        if(!produto){
            res.status(404).send({
                msg: 'Não foi encontrado esse produto !!',
                err: `${err}`
                });
            };
        
        res.status(302).send(produto);
    } catch (err) {
        res.status(404).send({
            msg: 'Não foi possível localizar o produto !!',
            err: `${err}`
        });
    };
};

exports.getNome = async (req, res, next) => { // Buscar por nome
    try {
        const produto = await Produto.findAll({
            where:{
                nome:{
                    [Op.like]: '%'+req.body.nome+'%'
                }
            },
        })
        res.json(produto);
    } catch (err) {
        res.status(400).json({
            success: false,
            code: 'BUSCAR_PRODUTO_NOME',
            message: 'Não foi localizado nenhum produto com esse nome !!',
            err: `${err}`
        })
    }
};

exports.getCategoria = async (req, res, next) => { // Buscar pela categoria
    await auth.sessionToken(req, res, next);
    try {
        const { nomeCategoria } = req.params.categoria;
        const categoria = Produto.findAll({
            where:{
                categoria: nomeCategoria
            }
        })
        
        if(!categoria){
            res.status(400).json({
                sucess: false,
                code: 'BUSCAR_CATEGORIA_ERROR',
                message: 'Essa categoria não existe !!',
                err: `${err}`
            })
        };
        res.send(200).json(categoria)
    } catch (err) {
        res.status(404).json({
            sucess: false,
            code: 'BUSCAR_CATEGORIA_ERROR',
            message: 'Não foi possível localizar categoria !!',
            err: `${err}`
        });
    }
};

// Add

exports.novoProduto = async (req, res, next) => { // Adicionar novo produto
    try {
       await Produto.create({
            nome: req.body.nome,
            categoria: req.body.categoria,
            preco: req.body.preco,
        });
        res.redirect('/produtos/buscartodos');
    } catch (err) {
        res.status(404).send({
            sucess: false,
            code: 'CADASTRAR_NOVO_PRODUTO_ERROR',
            message: 'Não foi possível cadastrar novo produto !!',
            err: `${err}`
        });
    }
};

// Alterar

exports.alterarProduto = async (req, res, next) => {
    try {
        await Produto.update(req.body, {
            where: {
                id: req.body.id
            }
        })
        res.redirect('/produtos/buscartodos');
    } catch (err) {
        res.status(400).send({
            success: false,
            code: 'ALTERAR_PRODUTO_ERROR',
            message : 'Não foi possível alterar produto !!',
            err: `${err}`
        });
    }
};

// Exclusão

exports.excluirProduto = async (req, res, next) => {
    try {
        await Produto.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/produtos/buscartodos');
    } catch (err) {
        res.status(400).send({
            success: false,
            code: 'EXCLUIR_PRODUTO_ERROR',
            message: 'Não foi possível excluir produto !!',
            err: `${err}`
        });
    }
};