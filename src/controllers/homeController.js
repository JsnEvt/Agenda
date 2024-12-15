// importando os contatos para ser possivel excluir a partir da tela principal do site
const Contato = require('../models/ContatoModel');

exports.index = async (req, res) => {
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos });
};
