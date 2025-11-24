export async function PostsNews(params) {
  const res = await fetch('https://valorant-kobra.vercel.app/api/posts', {
    cache: 'no-store',
  });
  const posts = await res.json();
  return posts;
}
