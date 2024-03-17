const Sequelize = require('sequelize');
const database = require('../db/db');
const Filme = database.define('filme', {
    id_filme: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    assunto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { database, modelname: 'filme', tableName: 'filmes' })
module.exports = Filme;
