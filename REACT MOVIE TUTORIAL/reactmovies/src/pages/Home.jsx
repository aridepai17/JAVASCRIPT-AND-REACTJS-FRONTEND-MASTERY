import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        
    ];

    const handleSearch = () => {
        e.preventDefault();
        alert(searchQuery)
    };


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for a movie..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Search</button>
            </form>


            <div className="movies-grid">
                {movies.map((movie) => (
                        <MovieCard movie={movie} key = {movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home;