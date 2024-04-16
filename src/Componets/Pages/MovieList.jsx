import React from 'react'
import { MovieItem } from './MovieItem'


export const MovieList = ({movies}) => {
  return (
    <div>
         <div className="mt-5 flex overflow-x-auto mx-6 " id='popular'>
                    
        {movies.map(movie => <MovieItem  key={movie.id} movie={movie} />)}
            </div>
    </div>
  )
}
