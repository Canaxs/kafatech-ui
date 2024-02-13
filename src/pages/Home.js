import React, {useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import ModalKafa from "../components/ModalKafa";



const Home = (props) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    return(
        <div className="container gradient-kafatech">
            <Navbar/>
            <div className="mx-auto flex-column d-flex justify-content-center align-items-center w-100 h-100">
                <button className="btn btn-secondary my-2 w-25 shadow-lg" onClick={handleShow}>Create grade information
                </button>
                <a href="/list" className="btn btn-secondary my-2 w-25 shadow-lg">Listing page</a>
                <ModalKafa show={show} setShow={setShow} />
            </div>
        </div>
    )
}
export default Home;