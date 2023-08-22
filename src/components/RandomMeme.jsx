import Loader from './Loader';
import useMeme from '../hooks/useMeme';

const RandomMeme = () => {

    const  {memesUrl, loading, fetchApi} = useMeme()

  return (
    <div className='w-1/2 border-white border-2 flex flex-col items-center justify-center gap-5 pt-2 pb-4 rounded-lg'>
      <h1 className='text-white text-2xl font-bold tracking-widest '>Generate Random Meme</h1>
      <div className='min-h-[400px] h-[400px]  min-w-[400px] w-[400px] flex items-center justify-center'>
        {
            loading ? <Loader/> : <img className='w-full h-full' src={memesUrl} alt="" />
        }
      </div>
      <button className='bg-white pt-1 pb-1 pl-4 pr-4 font-bold tracking-wider rounded-md' onClick={()=>fetchApi()}>Generate Random Meme</button>
    </div>
  )
}

export default RandomMeme
