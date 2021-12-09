import App from '../../App.css'
import React from 'react'

function index() {
        function change() {
                window.location.href = "/";
        }
        return (
                <>
                        <div className="Navbar">
                                <div className="main__nav">
                                        <h1 className="nav__heading" onClick={change}>MovieEye</h1>
                                </div>
                        </div>
                </>
        )
}

export default index
