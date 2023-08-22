import Loader from './Loader';
import useMeme from '../hooks/useMeme';

const SearchMeme = () => {

    const {memesUrl, loading, input, changeHandler, submitHandler} = useMeme()

  return (
    <div className='w-1/2 border-white border-2 flex flex-col items-center justify-center gap-5 pt-2 pb-4 rounded-lg'>
      <h1 className='text-white font-bold tracking-widest text-2xl'>Search <span className='text-red-500 uppercase font-bold border-b-2 border-white '>{input}</span> Meme</h1>
      <div className='min-h-[400px] h-[400px]  min-w-[400px] w-[400px] flex items-center justify-center'>
        {
            loading ? <Loader/> : <img className='w-full h-full' src={memesUrl} alt="" />
        }
      </div>
      <form onSubmit={submitHandler} className='w-[400px] flex justify-between'>
        <input className='w-[60%] outline-none text-center font-bold tracking-wider rounded-md' placeholder='Search Memes' type="text" value={input} onChange={changeHandler} />
        <button className='bg-white pt-1 pb-1 pl-4 pr-4 font-bold tracking-wider rounded-md'>Search Meme</button>
      </form>
    </div>
  )
}

export default SearchMeme
