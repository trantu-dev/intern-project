import { Request, Response, NextFunction } from 'express';
import { getPosts, newPost } from './post.business';
import { post } from './post.serialize'

export function getAllPost(req: Request, res: Response, next: NextFunction) {
  getPosts();
  res.status(200).json({ message: 'Get all post success' });
}

export function createNewPost(req: Request, res: Response, next: NextFunction) {
  const post = newPost()
  res.status(201).json({ message: 'Create new post success', post });
}
