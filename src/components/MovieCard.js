const MovieCard = ({movie}) => {
    return (
        <div className="flex flex-col max-w-[400px] rounded-b-2xl justify-center shadow-xl bg-[#E0E1DD]">
            <div className="overflow-hidden cursor-pointer relative rounded-t-2xl group">
                {movie.poster_path !== null
                ? <img alt={movie.title} className="rounded-t-2xl max-h-[800px] max-w-[400px] object-cover h-full w-full group-hover:scale-110 duration-300 ease-in-out" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
                : <img alt={movie.title} className="rounded-t-2xl max-h-[800px] object-cover w-full h-full" src="/placeholder-image.png" />}
                
            </div>
            <h4 className="font-semibold text-md text-center p-4">{movie.title}</h4>
        </div>
    )
}

export default MovieCard