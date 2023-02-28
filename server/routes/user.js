const router = require("express").Router();
const ctrls = require("../controllers/user");
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");
router.post("/register", ctrls.register);
router.post("/login", ctrls.login);
router.get("/current", verifyAccessToken, ctrls.getCurrent);
router.post("/refreshToken", ctrls.refreshAccessToken);
router.get("/logout", ctrls.logout);
router.get("/forgotpassword", ctrls.forgotPassword);
router.put("/reset-password", ctrls.resetPassword);
router.get("/", [verifyAccessToken, isAdmin], ctrls.getUsers);
router.delete("/", [verifyAccessToken, isAdmin], ctrls.deleteUser);
router.put("/current", [verifyAccessToken], ctrls.updateUser);
router.put("/:uid", [verifyAccessToken, isAdmin], ctrls.updateUserByAdmin);
module.exports = router;
// CRUD | Create - Read - Update - Delete | Post - Get - Put - Delete
// CREATE (POST) + PUT - body (khi dùng body thì nó sẽ không bị lộ ra trên trình duyệt)
// GET + DELETE - query (khi ta dùng query thì nó sẽ bị lộ ra trên trình duyệt )
