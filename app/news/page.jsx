import { Suspense } from 'react';
import Header from './components/Header';
import Drawer from '../components/Drawer';
import Posts from './components/Card-news';
import { PostsNews } from '@/lib/utils';

export default function News() {
  const postPromise = PostsNews();

  return (
    <>
      <Drawer>
        <Header />
        <main className='bg-gray-200 w-screen min-h-screen p-8 flex flex-wrap justify-around items-start py-7'>
          <Suspense fallback={<div>Loading...</div>}>
            <Posts postsPromise={postPromise} />
          </Suspense>
        </main>
      </Drawer>
    </>
  );
}
