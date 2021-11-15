const express = require("express")
const router = express.Router()

const errorHandler = require("../middlewares/error-handler")
const authentication = require("../middlewares/authentication")

const requests = require("./requests-router")
const users = require("./users-router")
const collections = require("./collections-router")
const histories = require("./histories-router")
const results = require("./results-router")
const UsersController = require("../controllers/users-controller")

router.post("/register", UsersController.register)
router.post("/login", UsersController.login)
router.post("/login-google", UsersController.loginGoogle)
router.post("/forgot-password", UsersController.forgotPassword)
router.post("/reset/:token", UsersController.resetPassword)

router.use(authentication)

router.use("/requests", requests)
router.use("/users", users)
router.use("/collections", collections)
router.use("/histories", histories)
router.use("/results", results)

router.use(errorHandler)

module.exports = router
