'use client';

import { use } from 'react';
import CardNews from './NewsResponse';

export default function Posts({ id, title, date, summary, postsPromise }) {
  const posts = use(postsPromise);

  return (
    <>
      {posts.map((post) => (
        <CardNews
          key={post.id}
          id={post.id}
          title={post.title}
          date={post.date}
          summary={post.content}
        />
      ))}
    </>
  );
}
