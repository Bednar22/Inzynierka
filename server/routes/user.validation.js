const Joi = require('@hapi/joi');

//VALIDATIONS

const loginValidation = (bodyRequest) => {
    const loginSchema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
    });
    return loginSchema.validate(bodyRequest);
};

function registerValidation(bodyRequest) {
    const registerSchema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().min(6).required(),
        name: Joi.string(),
        surname: Joi.string(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        nr_domu: Joi.number().required(),
        nr_mieszkania: Joi.number(),
        kod_pocztowy: Joi.number().required(),
    });

    return registerSchema.validate(bodyRequest);
}

//EXPORTS
module.exports.loginValidation = loginValidation;
module.exports.registerValidation = registerValidation;
