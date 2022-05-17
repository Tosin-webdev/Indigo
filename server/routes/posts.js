import express from "express";
// import {} from "../../client/src/actions/posts.js";
import {
  getPostsBySearch,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controller/post.controller.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);

export default router;
