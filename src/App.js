import './App.css';
import RandomMeme from './components/RandomMeme';
import SearchMeme from './components/SearchMeme';

function App() {
  return (
    <div className='flex h-screen w-screen gap-5 justify-between items-center bg-indigo-950 pt-4 pb-4 pl-8 pr-8'>
        <RandomMeme/>
        <SearchMeme/>
    </div>
  );
}

export default App;
