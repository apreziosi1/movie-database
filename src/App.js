import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

function App() {

  const [movies, setMovies] = useState ([]);
  const [selectedMovie, setSelectedMovie] = useState([]);
  
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const data = await fetch(process.env.REACT_APP_DISCOVER_URL);
    const movies = await data.json();
    console.log(movies)
    setMovies(movies.results)
    setSelectedMovie(movies.results[0])
  }

  const [searchTerm, setTerm] = useState ('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`)
        const searchedMovies = await data.json();
        console.log(searchedMovies)
        setMovies(searchedMovies.results)
        setSelectedMovie(searchedMovies.results[0])
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

   


  return (
    <div className='p-8 flex flex-col justify-center'>
      <h1 className='font-bold text-6xl text-center'>Movie Database</h1>
      <div className='flex flex-col my-8 items-center gap-4'>
      <div className='container flex justify-center'>
        <form action="" onSubmit={handleSubmit} className="w-full flex justify-center items-center gap-8">
          <input className='w-full h-[36px] rounded-full text-center text-lg" type="text' onChange={handleChange}/>
          <button className='min-w-[100px] p-2 rounded-xl hover:bg-black hover:text-white border-2 border-black'>Search</button> 
        </form>
        <button className='mx-2 min-w-[100px] p-2 rounded-xl hover:bg-black hover:text-white border-2 border-black' onClick={fetchMovies} >Reset</button>
      </div>
      <div className='rounded-2xl shadow-2xl mt-16 mb-8 flex justify-end bg-top-center bg-cover w-full h-[720px]' style={{backgroundImage: `url(${process.env.REACT_APP_IMG_PATH}${selectedMovie.backdrop_path}`}}>
        <div className='p-16 text-right flex flex-col justify-center items-end w-1/4 bg-gradient-to-r from-transparent to-black text-white rounded-2xl'>
          <h1 className='text-6xl mb-6'>{selectedMovie.title}</h1>
          {selectedMovie.overview ? <p>{selectedMovie.overview}</p> : null}
          <button className='mt-16 max-w-[100px] p-2 rounded-xl hover:scale-125 duration-300 border-2'>Play trailer</button> 
        </div>
        
      </div>
      </div>
      <div className='flex flex-wrap justify-center gap-3'>
      {movies.map(movie => {
        return (
          <MovieCard key={movie.id} movie={movie} selectMovie={setSelectedMovie}/>
        )
      })}
    </div>
   </div>
  );
}

export default App;
