import App from '../../App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function Index() {
    const { id } = useParams();
    console.log(id)
    const [newMovie, setNewMovie] = useState([]);

    useEffect(async () => {
        try {

            const url = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=4a3bcc72`);
            // // const res = await fetch(`${url}`);
            const data = await url.json();
            console.log(data)
            setNewMovie([data])
            // console.log(newMovie)
        } catch (error) {
            console.log(error.message)
        }
    }, [])
    return (
        <>
            <div className="single__main__movie__box">
                <div className="single__movie__box">
                    {newMovie.map((movie) => {
                        return (
                            <div key={movie.imdbID} className="single__movie__item" >
                                <div className="single__movie__poster">
                                    <img className="single__movie__img" src={movie.Poster} alt={movie.Title} />
                                </div>
                                <div className="single__movie__title">
                                    <h3>{movie.Title} <span className="single__movie__rating">{movie.imdbRating}</span></h3>
                                    <h5>Year: {movie.Year}  Released: {movie.Released}</h5>
                                    <h5 className="single__movie__genre">Genre: {movie.Genre}</h5>
                                    <h5>Writers: {movie.Writer}</h5>
                                    <h5>Actors: {movie.Actors} </h5>
                                    <h5>Language: {movie.Language} </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Index
