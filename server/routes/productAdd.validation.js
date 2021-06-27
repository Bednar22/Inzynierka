const Joi = require('@hapi/joi');

/* Product validation function - checks request from frontend before adding new product */

function addProductValidation(bodyRequest) {

    const addProductSchema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().required(),
        discountPrice:Joi.number(),
        category: Joi.string().required(),
        subCategory: Joi.string(),
        photoId: Joi.string(),
        description: Joi.string(),
        photo_id: Joi.required()
    });

    return addProductSchema.validate(bodyRequest);
}

module.exports.addProductValidation = addProductValidation;