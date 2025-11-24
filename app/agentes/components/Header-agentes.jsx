export default function Header() {
  return (
    <header>
      <section className='sticky top-0 z-10 navbar bg-base-100 shadow-sm flex justify-start items-center gap-4'>
        <div>
          <label htmlFor='main-menu' className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-8 w-8 stroke-current'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>{' '}
            </svg>
          </label>
        </div>

        <div className='w-32 h-auto'>
          <img src='/Riot_Games.svg' alt='Riot Games' />
        </div>
      </section>

      <section className='bg-gray-900 w-full h-60 flex justify-start items-end px-8 pb-6'>
        <h1 className='text-6xl max-md:text-5xl max-sm:text-3xl font-bold'>
          Agentes de Combate
        </h1>
      </section>
    </header>
  );
}
