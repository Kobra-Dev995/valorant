export default function CardNews({ id, title, date, summary, postsPromise }) {
  
  return (
    <div className='bg-white w-96 h-120 shadow-md rounded-lg'>
      <figure className='bg-gray-200 w-full h-56 overflow-hidden rounded-md'>
        <img src={`https://placehold.co/600x400?text=${id}`} alt='' />
        <figcaption>
          <h3 className='text-white text-xl font-bold p-4'>{title}</h3>
        </figcaption>
      </figure>

      <div className='text-black'>
        <h2 className='text-xl font-bold p-4'>{title}</h2>
        <p className='text-sm text-gray-500 px-4'>
          <time datetime='2023-06-01'>{date}</time>
        </p>
        <p className='text-base p-4'>{summary}</p>
      </div>
    </div>
  );
}
