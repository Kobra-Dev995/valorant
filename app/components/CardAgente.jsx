export default function CardAgente({ agente, title, description }) {

  return (
    <>
      <div
        className={`${agente} bg-fixed bg-top bg-cover w-full h-[90vh] relative z-0`}
      >
        <div className='w-full h-full bg-black/40 flex flex-col justify-center items-center gap-5 p-10'>
          <h2 className='text-white text-3xl md:text-5xl font-bold text-center'>
            {title}
          </h2>
          <p className='text-white text-center max-w-2xl'>{description}</p>
        </div>
      </div>
    </>
  );
}
