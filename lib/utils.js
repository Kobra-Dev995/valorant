export async function PostsNews(params) {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts;
}
