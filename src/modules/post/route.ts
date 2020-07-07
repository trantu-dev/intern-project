import { Router } from 'express';
import { getAllPost, createNewPost } from './post.controller';

const router = Router();

router.route('/api/posts').get(getAllPost).post(createNewPost);

export { router as postRouter };
