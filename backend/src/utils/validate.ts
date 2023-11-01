import * as Joi from 'joi';

export const candidateSchema = Joi.object({
  nome: Joi.string().min(2).required().label('nome'),
  email: Joi.string().email().required().label('email'),
  level: Joi.number().integer().min(0).max(2).required().label('level'),
  linkedin: Joi.string().min(2).required().label('linkedin'),
  github: Joi.string().min(2).required().label('github'),
  telefone: Joi.string().pattern(/^[0-9]{11}$/).required().label('telefone').messages({
    'string.pattern.base': 'O telefone deve ser válido.',
  }),
  portfolio: Joi.string().label('portfolio'),
  curriculo: Joi.any().label('curriculo'),
});
