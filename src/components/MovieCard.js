import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className='flex items-center justify-center shadow-xl bg-[#E0E1DD]'>
            <div className="overflow-hidden cursor-pointer relative group">
                <img alt={movie.title} className="object-cover w-full group-hover:scale-110 duration-300 ease-in-out" src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} />
            </div>
        </div>
    )
}

export default MovieCard