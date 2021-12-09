import App from '../../App.css'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import { useState } from 'react'




function Index() {
        const [input, setInput] = useState("");

        function working() {
                window.location.href = "/movies/" + input;
                console.log(input)
        }
        return (
                <>
                        <div className="Search">
                                <div className="main__search">
                                        <input className="search__input" value={input} onChange={(e) => setInput(e.target.value)} type="search" placeholder="Enter any Movie, Series, Show name" />
                                        <button className="search__button" onKeyUp={working} onClick={working}><AiOutlineSearch /></button>
                                </div>
                        </div>

                </>
        )
}

export default Index
