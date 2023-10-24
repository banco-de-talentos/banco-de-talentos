import * as Joi from 'joi';

export const candidateSchema = Joi.object({
  nome: Joi.string().min(2).required().label('nome'),
  email: Joi.string().email().required().label('email'),
  level: Joi.number().integer().min(0).max(2).required().label('level'),
  linkedin: Joi.string().min(2).required().label('linkedin'),
  github: Joi.string().min(2).required().label('github'),
  telefone: Joi.number().required().label('telefone'),
  portfolio: Joi.string().label('portfolio'),
  curriculo: Joi.any().label('curriculo'),
});

export const searchCandidateSchema = Joi.object({
    nome: Joi.string().label('nome'),
    email: Joi.string().label('email'),
    github: Joi.string().label('github'),
    telefone: Joi.number().label('telefone'),
})


// Validar retorno do getAll
//const schema = Joi.array().items({ a: Joi.string() });
