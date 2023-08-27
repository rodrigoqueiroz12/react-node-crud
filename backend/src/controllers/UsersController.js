const User = require("../models/User")

const index = async (_req, res) => {
  const users = await User.getUsers()

  return res.status(200).json(users)
}

const show = async (req, res) => {
  const { id } = req.params

  const user = await User.getUser(id)

  if (!user) {
    return res.status(400).json({ message: "Usuário não encontrado" })
  }

  return res.status(200).json(user)
}

const create = async (req, res) => {
  const { body } = req

  const user = await User.createUser(body)

  return res
    .status(200)
    .json({ message: "Usuário criado com sucesso", user: user })
}

const update = async (req, res) => {
  const { id } = req.params
  const { body } = req

  const user = await User.updateUser(id, {
    ...body,
    contact: body.contact === "default" ? null : body.contact,
    date_of_birth: body.date_of_birth === "default" ? null : body.date_of_birth,
  })

  return res
    .status(200)
    .json({ message: "Dados do usuário atualizados com sucesso", user: user })
}

const destroy = async (req, res) => {
  const { id } = req.params

  const isDeleted = await User.deleteUser(id)

  if (!isDeleted) {
    return res.status(400).json({
      message: "Aconteceu algo inesperado, tente novamente mais tarde",
    })
  }

  return res.status(200).json({ message: "Usuário removido com sucesso" })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}
