import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import YouTube from 'react-youtube';
import "./style.css"

const ParticularMovie = () => {
    let [trailer,setTrailer]=useState();
    const location = useLocation();
    const movieDetails = location.state?.x; // Use optional chaining to avoid errors
  
    if (!movieDetails) {
      return <div>No movie data available</div>; // Fallback if no data
    }
    async function getTrailer(id) {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=c202f0c11aa8b52272804f5b020a8667`)
        .then(x=>x.json())
        .then(y=>setTrailer(y.results[0].key)
        )
    }
    console.log(trailer);
    
  
    return (
        <div >
        <div id='main' >
      <div  className='movie-container'  >
      <img src={`https://image.tmdb.org/t/p/original/${movieDetails.backdrop_path}` }style={{width:"100%"}} />
        <h1>{movieDetails.title}</h1>
        <p>{movieDetails.overview}</p>
        <button onClick={()=>getTrailer(movieDetails.id)}>Trailer</button>
       
      </div>
      <div className="video-container">
         {trailer && <YouTube  videoId={trailer} /> }
      </div>
      </div>
      </div>
    );
  };
  
export default ParticularMovie
