const opportunitiesModel = require('../models/opportunitiesModel')
const SECRET = process.env.SECRET
const jwt = require('jsonwebtoken');


const allOpportunities = async (req, res) => {
    try {
        const searchOpportunities = await opportunitiesModel.find();

        if (!searchOpportunities) {
            return res.status(404).send("Not Found");
        }
        res.status(200).json(searchOpportunities);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getOpportunityById = async (req, res) => {
    try {
        const findOpportunity = await opportunitiesModel.findById(req.params.id);

        if (findOpportunity == null) {
            return res.status(404).json({
                message: "Ops! Está faltando pó para este café: ID não encontrado."
            });
        }

        res.status(200).json(findOpportunity);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


const getOportunityByCategory = async (req, res) => {
    try {
        const {
            categoria
        } = req.query;
        const findOpportunityCategory = await oportunitiesModel.find({
            categoria: categoria,
        });
        if (!findOpportunityCategory.length) {
            return res.status(404).json({
                message: "Ops! Esse café deu errado: não há oportunidades nesta categoria",
            });
        }
        res.status(200).json(findOpportunityCategory);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const newOpportunity = async(req, res) => {
    try{
        const authHeader = req.get('authorization')
        if(!authHeader){
            return res.status(401).send('É necessário um Token')
        }
        const token = authHeader.split(' ')[1]

        await jwt.verify(token, SECRET, async function(error){
            if(error){
                return res.status(403).send('Token inválido')
            }
            const {titulo, organizador, modo, vagas, assunto, descricao, requisitos, regiao, acessibilidade, certificado, prazoInscricao, inscricao} = req.body
            const newRegister = new opportunityModel({
                titulo, organizador, modo, vagas, assunto, descricao, requisitos, regiao, acessibilidade, certificado, prazoInscricao, inscricao})
            const savedOpportunity = await newRegister.save()

            res.status(201).json(savedOpportunity)
        })        
    } catch (error) {
        console.error(error)
        res.status(500).json({message: error.message})
    }
}



const updateOpportunityById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')
        if (!authHeader) {
            return res.status(401).send('É necessário um Token')
        }
        const token = authHeader.split(' ')[1]
        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Token inválido')
            }
            const {
                titulo,
                organizador,
                modo,
                assunto,
                duracao,
                requisitos,
                regiao,
                acessibilidade,
                certificado,
                prazoInscricao

            } = req.body
            await opportunitiesModel.findByIdAndUpdate(req.params.id, {
                titulo,
                organizador,
                modo,
                assunto,
                duracao,
                requisitos,
                regiao,
                acessibilidade,
                certificado,
                prazoInscricao
            })
            const updatedOpportunities = await opportunitiesModel.findById(req.params.id)
            res.status(200).json(updatedOpportunities)

        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
};


const deleteOpportunityById = async (req, res) => {
    try {
        const authHeader = req.get('authorization')
        if (!authHeader) {
            return res.status(401).send('É necessário um token')
        }
        const token = authHeader.split(' ')[1]
        await jwt.verify(token, SECRET, async function (err) {
            if (err) {
                return res.status(403).send('Token inválido')
            }
            const { id } = req.params
            await opportunitiesModel.findByIdAndDelete(id)
            res.status(200).json({
                message: `Xii! A xícara quebrou: O registro com o ID ${id} foi deletado`
            })
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
};


module.exports = {
    allOpportunities,
    getOpportunityById,
    getOportunityByCategory,
    newOpportunity,
    updateOpportunityById,
    deleteOpportunityById
}