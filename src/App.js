import "./App.css";
import RandomMeme from "./components/RandomMeme";
import SearchMeme from "./components/SearchMeme";

function App() {
  return (
    <div className="lg:h-screen w-screen bg-indigo-950 pt-4 pb-4 pl-8 pr-8">
    <h1 className="text-3xl text-white text-center font-bold mb-4 tracking-widest">Memes Generator</h1>
      <div className="lg:flex flex-row text-center gap-5 w-[20rem] sm:w-[600px] md:w-[700px] lg:w-auto m-auto lg:m-0" >
        <RandomMeme />
        <SearchMeme />
      </div>
    </div>
  );
}

export default App;
