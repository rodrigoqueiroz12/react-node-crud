const { body, validationResult } = require("express-validator")
const connection = require("../database/connection")

const validateUsersCreateFields = [
  body("name")
    .notEmpty()
    .withMessage("O campo Nome é obrigatório")
    .isLength({ max: 255 })
    .withMessage("O campo Nome pode conter no máximo 255 caracteres"),

  body("email")
    .notEmpty()
    .withMessage("O campo E-mail é obrigatório")
    .isEmail()
    .withMessage("O campo E-mail precisa receber um e-mail válido")
    .custom(async value => {
      const query = "SELECT id, email FROM users WHERE email = ?"
      const [exists] = await connection.execute(query, [value])

      if (exists.length > 0) {
        throw new Error("Este e-mail já está sendo utilizado")
      }

      return true
    }),

  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    next()
  },
]

const validateUsersUpdateFields = [
  body("name")
    .notEmpty()
    .withMessage("O campo Nome é obrigatório")
    .isLength({ max: 255 })
    .withMessage("O campo Nome pode conter no máximo 255 caracteres"),

  body("email")
    .notEmpty()
    .withMessage("O campo E-mail é obrigatório")
    .isEmail()
    .withMessage("O campo E-mail precisa receber um e-mail válido")
    .custom(async (value, { req }) => {
      const { id } = req.params
      const query = "SELECT id, email FROM users WHERE email = ?"
      const [exists] = await connection.execute(query, [value])

      if (exists[0].id.toString() !== id && exists.length > 0) {
        throw new Error("Este e-mail já está sendo utilizado")
      }

      return true
    }),

  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    next()
  },
]

module.exports = {
  validateUsersCreateFields,
  validateUsersUpdateFields,
}
