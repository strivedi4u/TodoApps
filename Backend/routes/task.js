const router = require("express").Router();
const taskController = require('../controllers/taskController');

router.post("/", taskController.task_create);
router.get("/", taskController.task_all);
router.get("/:taskId", taskController.task_details);
router.put("/:taskId", taskController.task_update);
router.delete("/:taskId", taskController.task_delete);


module.exports = router;