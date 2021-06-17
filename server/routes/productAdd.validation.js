const Joi = require('@hapi/joi');

/* Product validation function - checks request from frontend before adding new product */

function addProductValidation(bodyRequest) {

    const addProductSchema = Joi.object({
        name: Joi.string().required(),
        price: Joi.required(),
        category: Joi.string().required(),
        subCategory: Joi.number().required(),
        photoId: Joi.string(),
        description: Joi.string()
    });

    return addProductSchema.validate(bodyRequest);
}

module.exports.addProductValidation = addProductValidation;