const Filme = require("../models/Filme");

module.exports = class FilmeController {
    static cadastrarFilme(req, res) {
        res.render("filmes/Cadastrar");
    }


    // CREATE
    static async FilmeCreate(req, res) {
        const filme = {
            autor: req.body.autor,
            titulo: req.body.titulo,
            assunto: req.body.assunto,
            descricao: req.body.descricao,
            link: req.body.link
        }
        await Filme.create(filme);
        
        res.redirect("/")
    }

    
 
    static async listarFilmes(req, res) {
        const filme = await Filme.findAll({ raw: true })
        res.render("filmes/listar", { filme });
    }


    //UPDATE
    static async UpdateFilme(req, res) {
        const id_filme = req.params.id_filme;
        const filme = await Filme.findOne({ where: { id_filme: id_filme }, raw: true })
        res.render("filmes/update", { filme })

    }



    static async FilmeUpdate(req, res) {
        const id_filme = req.body.id_filme
        const filme = {
            autor: req.body.autor,
            titulo: req.body.titulo,
            assunto: req.body.assunto,
            descricao: req.body.descricao,
            link: req.body.link
        }
        await Filme.update(filme, { where: { id_filme: id_filme } })
        res.redirect("/")
    }


    static async removerFilme(req, res) {
        const id_filme = req.body.id_filme;
        await Filme.destroy({ where: { id_filme: id_filme } })
        res.redirect("/")
    }

}