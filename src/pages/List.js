import React, {useState,useEffect} from "react";
import {getAll} from "../api/apiCalls";



const List = (props) => {

    const [formData, setFormData] = useState({
        nameAndSurname: ""
    });

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllList();
    }, []);

    const getAllList = async () => {
        const { data } = await getAll(formData);
        setNotes(data);
    }

    return(
        <div>
            <div className="arrow-icon p-2" style={{cursor: "pointer"}}>
                <a href={"/home"}><i className="bi bi-arrow-left text-light h3 pull-left"></i></a>
            </div>
            <div className="d-flex justify-content-center">
                <table className="table table-light opacity-75 w-75">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name and Surname</th>
                        <th scope="col">Course Name</th>
                        <th scope="col">Course Note</th>
                        <th scope="col">View and Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {notes.map((note) => (
                        <tr>
                            <th scope="row">{note.id}</th>
                            <td>{note.nameAndSurname}</td>
                            <td>{note.courseName}</td>
                            <td>{note.courseNote}</td>
                            <td><i className="bi bi-view-list text-dark h3 pull-left" style={{cursor: "pointer"}}></i><i
                                className="bi bi-file-earmark-x-fill h3 m-lg-4" style={{cursor: "pointer"}}></i></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default List;