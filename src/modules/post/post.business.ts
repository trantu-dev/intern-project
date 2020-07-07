import { serializePost } from './post.serialize';

export function getPosts(): PostModel[] {
  const arrPosts = [];
  const posts = arrPosts.map((post) => serializePost(post));
  return posts;
}
export function newPost(): PostModel {
  const post = '';
  return serializePost(post);
}
