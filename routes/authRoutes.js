const hapi = require("hapi");
const router = new hapi.Router();
const authHandler = require("../handler/authHandler");

router.post("/register", authHandler.register);
router.post("/login", authHandler.login);

module.exports = router;