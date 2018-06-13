var router =  require('express').Router(); // Recupero o express e digo que essa const será gerenciador de rotas

var produtos = require('../controllers/produtos-controller'); // Meu controlador
var session = require('../middleware/auth-check');

router.get('/buscartodos', session.sessionToken, produtos.getTodos); // Buscar Todos Produtos

router.get('/buscarid/:id', produtos.getId); // Buscar pelo ID

router.get('/buscarnome', produtos.formProcurarProduto); // Formulário para buscar nome
router.post('/buscarnome', produtos.getNome); // Busca o nome

router.get('/buscarcategoria/:categoria', produtos.getCategoria); // Buscar pela categoria

router.get('/novoProduto', produtos.formAddProduto); // Formulário para adicionar novo produto 
router.post('/novoProduto', produtos.novoProduto); // Adicionar novo produto
    
router.get('/alterar/:id', produtos.formBuscaAlteracao); // Formulário para alterar produto
router.post('/produtoAlterado', produtos.alterarProduto);

router.get('/excluirProduto/:id', produtos.excluirProduto); // Exclui produto

module.exports = router; // Exporto minhas rotas.