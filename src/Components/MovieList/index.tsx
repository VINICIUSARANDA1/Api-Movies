'use client'

import axios from 'axios';
import './index.scss'
import { useState , useEffect} from 'react';


export default function MovieList(){
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const getMovies = () => {
            axios({
                method: 'get',
                url: 'https://api.themoviedb.org/3/discover/movie',
                params:{
                    api_key: 'a30bb2af8833eca773365b90802f6bd1',
                    language: 'pt-BR'
                }
    
            }).then(response =>{
                setMovies(response.data.results)
            })
        }
    
    
        getMovies();
    
    })

  
    return(
        <ul className="movie-list">
          {movies.map((movie) =>
            <li className='movie-card'> 
                {movie.title}
            </li>
          )}
        </ul>
    )
}