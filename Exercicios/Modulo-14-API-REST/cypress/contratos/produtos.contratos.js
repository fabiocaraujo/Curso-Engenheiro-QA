const Joi = require ('joi')

const produtosSchema = Joi.object({
    quantidade: Joi.number(),
    produtos: Joi.array().items({
        nome: Joi.string(),
        preco: Joi.number(),
        descricao: Joi.string(),
        quantiade: Joi.number(),
        _id: Joi.string()
    })
})

export default produtosSchema;