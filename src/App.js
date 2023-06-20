import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard'

function App() {

  const [movies, setMovies] = useState ([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(process.env.REACT_APP_API_URL);
    const movies = await data.json();
    console.log(movies)
    setMovies(movies.results)
  }


  return (
    <>
    <div className='p-8'>
      <h1 className='font-bold text-6xl'>Movie Database</h1>
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
