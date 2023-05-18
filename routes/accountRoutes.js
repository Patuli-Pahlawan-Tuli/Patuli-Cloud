const hapi = require("hapi");
const router = hapi.Router();
const Auth = require("../middleware/Auth");
const AccountHandler = require("../handler/accountHandler");

router.use(Auth);
router.get("/profile", AccountHandler.getUser);

// profile image route
// router.post("/profile/images", userController.updateUser);

// history route
// router.get("/history", historyController.getHistory);

module.exports = router;