const mongoose = require('mongoose');

const opportunitiesSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    organizador: {
        type: String,
        required: true
    },
    modo: {
        type: String,
        required: true
    },
    vagas: {
        type: Number,
        required: true
    },
    assunto: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    requisitos: {
        type: String,
        required: true
    },
    regiao: {
        type: String,
        required: true
    },
    acessibilidade: {
        type: String,
        required: true
    },
    certificado: {
        type: String,
        required: true
    },
    prazoInscricao: {
        type: String,
        required: true
    },
    Inscricao: {
        type: String,
        required: true
    },
}, {
    versionKey: false,
});

const opportunitiesCollection = mongoose.model("collectionOpportunities", opportunitiesSchema);
module.exports = opportunitiesCollection