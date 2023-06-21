const SearchArea = ({handleChange, handleSubmit}) => {
    return (
        <>
            <form action="" onSubmit={handleSubmit} className="w-screen flex justify-center items-center gap-8">
            <input className="w-1/2 h-full rounded-full text-center text-lg" type="text" onChange={handleChange}/>
            <button className="p-2 rounded-xl hover:bg-black hover:text-white border-2 border-black">Search</button>
            
            </form>
        </>
    )
}

export default SearchArea