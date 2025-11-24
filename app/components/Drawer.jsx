import Link from 'next/link';

export default function Drawer({ children }) {
  return (
    <section>
      <div className='drawer'>
        <input id='main-menu' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>{children}</div>
        <div className='drawer-side'>
          <label
            htmlFor='main-menu'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu bg-base-200 min-h-full w-80 p-4 gap-3 z-50'>
            <li className='w-full py-6 flex justify-center items-center'>
              <Link href='/'>
                <img
                  src='/Riot_Games.svg'
                  alt='Navegação'
                  className='w-1/2 h-auto'
                />
              </Link>
            </li>

            <li className='font-bold'>
              <Link href='/' className='text-xl'>
                Home
              </Link>
            </li>
            <li className='font-bold'>
              <Link href='/news' className='text-xl'>
                Notícias
              </Link>
            </li>
            <li className='font-bold'>
              <Link href='/agentes' className='text-xl'>
                Agentes
              </Link>
            </li>
            <li className='font-bold'>
              <Link href='/mapas' className='text-xl'>
                Mapas
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
