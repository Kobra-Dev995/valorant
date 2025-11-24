export default function Footer() {
  return (
    <>
      <div className='fab'>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-lg btn-circle bg-white hover:bg-black focus:bg-black w-14 h-auto p-2'
        >
          <img src='/favicon.png' alt='FAQ' className='w-full h-full' />
        </div>

        <div>
          Github{' '}
          <a
            className='btn btn-lg btn-circle'
            href='https://github.com/Kobra-Dev995'
          >
            G
          </a>
        </div>
        <div>
          Instagram <button className='btn btn-lg btn-circle'>B</button>
        </div>
      </div>

      <footer className='footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10'>
        <p>Projeto desemvolvido para fins educacionais.</p>
        <nav>
          <div className='flex justify-center items-center gap-4'>
            <a
              href='https://twitter.com/valorantbrasil'
              target='_blank'
              className='w-6 h-6 invert'
            >
              <svg viewBox='0 0 1200 1227'>
                <title>twitter/X</title>
                <path d='M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z'></path>
              </svg>
            </a>

            <a
              href='https://www.instagram.com/valorantbrasil'
              target='_blank'
              className='w-6 h-6 invert'
            >
              <svg viewBox='0 0 13.26 13.3'>
                <title>instagram</title>
                <path
                  d='M6.67 3.24a3.43 3.43 0 1 0 3.42 3.44 3.43 3.43 0 0 0-3.42-3.44Zm0 5.65a2.22 2.22 0 1 1 2.22-2.22 2.21 2.21 0 0 1-2.22 2.22Z'
                  transform='translate(-.04 .05)'
                ></path>
                <path
                  d='M11 3.08a.8.8 0 1 1-.8-.8.8.8 0 0 1 .8.8Z'
                  transform='translate(-.04 .05)'
                ></path>
                <path
                  d='M6.67 0H3.92A5 5 0 0 0 2.3.31a3.31 3.31 0 0 0-1.18.77 3.31 3.31 0 0 0-.77 1.18A5.29 5.29 0 0 0 0 3.88v5.5A5.22 5.22 0 0 0 .35 11a3.35 3.35 0 0 0 .77 1.19 3.42 3.42 0 0 0 1.18.76 4.75 4.75 0 0 0 1.62.31h5.5a4.75 4.75 0 0 0 1.58-.32 3.15 3.15 0 0 0 1.18-.76A3.35 3.35 0 0 0 13 11a5 5 0 0 0 .31-1.61V3.88A5 5 0 0 0 13 2.26a3.46 3.46 0 0 0-2-2A5 5 0 0 0 9.37 0a26.88 26.88 0 0 1-2.7 0Zm0 1.2h2.69a3.78 3.78 0 0 1 1.24.23 2.21 2.21 0 0 1 1.27 1.27 3.67 3.67 0 0 1 .23 1.23v5.39a3.78 3.78 0 0 1-.23 1.24 2.21 2.21 0 0 1-1.27 1.27 3.77 3.77 0 0 1-1.24.22H4a3.77 3.77 0 0 1-1.24-.22 2.21 2.21 0 0 1-1.27-1.27 3.78 3.78 0 0 1-.23-1.24V3.93a3.67 3.67 0 0 1 .21-1.23 2.21 2.21 0 0 1 1.27-1.27A3.78 3.78 0 0 1 4 1.2c.68.01.89 0 2.67 0Z'
                  transform='translate(-.04 .05)'
                ></path>
              </svg>
            </a>

            <a
              href='https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g'
              target='_blank'
              className='w-6 h-6'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <title>YouTube</title>
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
          </div>
        </nav>

        <nav className='grid grid-flow-col gap-6'>
          <a className='link link-hover' href='/'>
            <img src='/mascote.jpg' alt='' width={200} />
          </a>
          <a className='link link-hover' href='/'>
            <img src='/termos-idade.png' alt='' width={200} />
          </a>
        </nav>

        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Valorant
          </p>
        </aside>
      </footer>
    </>
  );
}
