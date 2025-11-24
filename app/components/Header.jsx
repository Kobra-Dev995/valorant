export default function Header() {
  return (
    <>
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
        <section className='w-full h-auto relative flex justify-center items-end'>
          <video autoPlay loop muted>
            <source src='https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/aa283e1900542321d17e2689b369b7d35fa97a14.mp4' />
          </video>
          <section className='w-full h-1/2 max-md:h-full flex flex-col justify-center items-center gap-7 absolute z-10 p-10 max-md:pb-20 max-md:bg-black/30'>
            <h1 className='text-white text-4xl max-md:text-3xl max-sm:text-2xl font-bold text-center'>
              Vamos mais uma Rank?
            </h1>
            <p>
              Aperte no botão e vamos embarcar na aventura do Valorant e
              descobrir novas táticas de jogos!
            </p>
            <button className='btn btn-wide md:btn-sm px-0 outline-red-500 text-white/50 font-bold text-lg rounded-2xl outline-1 outline-offset-0 bg-red-500/60 hover:bg-white hover:text-black hover:outline-black'>
              <picture className='w-full h-full flex justify-center items-center hover:invert'>
                <img
                  src='https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/7b76209193f1bfe190d3ae6ef8728328870be9c3-736x138.png?auto=format&fit=fill&q=80&w=100'
                  alt='Valorant'
                />
              </picture>
            </button>
          </section>
        </section>
      </header>
    </>
  );
}
