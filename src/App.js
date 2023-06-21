import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';
import SearchArea from './components/SearchArea';

function App() {

  const [movies, setMovies] = useState ([]);
  
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(process.env.REACT_APP_DISCOVER_URL);
    const movies = await data.json();
    console.log(movies)
    setMovies(movies.results)
  }

  const [searchTerm, setTerm] = useState ('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`)
        const searchedMovies = await data.json();
        console.log(searchedMovies)
        setMovies(searchedMovies.results)
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }


  return (
    <>
    <div className='p-8 flex flex-col justify-center'>
      <h1 className='font-bold text-6xl text-center'>Movie Database</h1>
      <div className="flex flex-col my-8 items-center gap-4">
        <SearchArea handleChange={handleChange} handleSubmit={handleSubmit}  />
        <button className="p-2 rounded-xl hover:bg-black hover:text-white border-2 border-black w-1/6" onClick={fetchMovies} >Reset</button>
      </div>
      <div className='p-8 flex flex-wrap justify-center gap-4'>
      {movies.map(movie => {
        return (
          <MovieCard key={movie.id} movie={movie}/>
        )
      })}
    </div>
   </div>
   </>
  );
}

export default App;
