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
            <div className="main__movie__box">
                <div className="movie__box">
                    {newMovie.map((movie) => {
                        return (
                            <div key={movie.imdbID} className="movie__item">
                                <div className="movie__poster">
                                    <img src={movie.Poster} alt={movie.Title} />
                                </div>
                                <div className="movie__title">
                                    <h3>{movie.Title}</h3>
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
