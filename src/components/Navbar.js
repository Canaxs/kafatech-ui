import React from "react";



const Navbar = (props) => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-opacity-50">
            <div className="container-fluid">
                <p className="navbar-brand m-1" >Kafatech</p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav m-2">
                        <a className="nav-link active text-light" aria-current="page" href="/home">Home</a>
                        <a className="nav-link text-light" href="/list">List</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;