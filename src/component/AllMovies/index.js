import App from '../../App.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'



function Index() {
    const { title } = useParams();

    const [dataNew, setDataNew] = useState([]);
    // const [forID, setNewId] = useState([])
    useEffect(async () => {
        try {
            const url = `https://omdbapi.com/?s=${title}&page=1&apikey=4a3bcc72`;
            const res = await fetch(`${url}`);
            const data = await res.json();
            setDataNew(data.Search)
        } catch (error) {
            console.log(error.message)
        }
    }, [])

    // console.log(dataNew);
    return (
        <>
            <div className="main__movie__box">
                <div className="movie__box">
                    {dataNew.map((movie) =>
                        <div key={movie.imdbID} className="movie__item" onClick={() => window.location.href = "/byid/" + movie.imdbID}>
                            <div className="movie__poster">
                                <img src={movie.Poster} alt={movie.Title} />
                            </div>
                            <div className="movie__title">
                                <h3>{movie.Title}</h3>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Index
