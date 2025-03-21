import express from "express";
import {
  getUserCourseProgress,
  getUserEnrolledCourse,
  updateUserCourseProgress,
} from "../controllers/userCourseProgressController";

const router = express.Router();

router.get("/:userId/enrolled-courses", getUserEnrolledCourse);
router.get("/:userId/courses/:courseId", getUserCourseProgress);
router.put("/:userId/courses/:courseId", updateUserCourseProgress);

export default router;
