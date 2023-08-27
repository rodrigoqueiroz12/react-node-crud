const router = require("express").Router()

// Controllers
const UsersController = require("./controllers/UsersController")

// Middleware
const UsersMiddleware = require("./middleware/UsersMiddleware")

router.get("/users", UsersController.index)

router.get("/users/:id", UsersController.show)

router.post(
  "/users",
  UsersMiddleware.validateUsersCreateFields,
  UsersController.create,
)

router.put(
  "/users/:id",
  UsersMiddleware.validateUsersUpdateFields,
  UsersController.update,
)

router.delete("/users/:id", UsersController.destroy)

module.exports = router
