export serializePost = (doc: Post): PostModel => {
  return {
    id: doc.id,
    title: doc.title
  }
}