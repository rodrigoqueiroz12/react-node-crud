const connection = require("../database/connection")

const getUsers = async () => {
  const query = "SELECT * FROM users"
  const [users] = await connection.execute(query)

  return users
}

const getUser = async id => {
  const query = "SELECT * FROM users WHERE id = ?"
  const [user] = await connection.execute(query, [id])

  if (user.length <= 0) {
    return false
  }

  return user
}

const createUser = async ({
  name,
  email,
  contact = null,
  date_of_birth = null,
}) => {
  const query =
    "INSERT INTO users (name, email, contact, date_of_birth) VALUES (?, ?, ?, ?)"
  const [created] = await connection.execute(query, [
    name,
    email,
    contact,
    date_of_birth,
  ])

  return { id: created.insertId }
}

const updateUser = async (
  id,
  { name = null, email = null, contact = null, date_of_birth = null },
) => {
  const userQuery = "SELECT * FROM users WHERE id = ?"
  const [user] = await connection.execute(userQuery, [id])

  const query =
    "UPDATE users SET name = ?, email = ?, contact = ?, date_of_birth = ? WHERE id = ?"
  const [updatedUser] = await connection.execute(query, [
    name || user.name,
    email || user.email,
    contact || user.contact,
    date_of_birth || user.date_of_birth,
    id,
  ])

  return updatedUser
}

const deleteUser = async id => {
  const query = "SELECT * FROM users WHERE id = ?"
  const [user] = await connection.execute(query, [id])

  if (user.length <= 0) {
    return false
  }

  const deleteUserQuery = "DELETE FROM users WHERE id = ?"
  await connection.execute(deleteUserQuery, [id])

  return true
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
