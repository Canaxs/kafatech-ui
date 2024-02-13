import React, {useState,useEffect} from "react";
import {getAll,getNote,deleteNote} from "../api/apiCalls";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {toast,ToastContainer} from "react-toastify";



const List = (props) => {

    const [show, setShow] = useState(false);

    const [one, setOne] = useState({
        Id: "",
        nameAndSurname: "",
        courseName: "",
        courseNote: ""
    })

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

    const getAllListName = async (name) => {
        let nameData = {
            nameAndSurname: name
        }
        setFormData(nameData)
        const { data } = await getAll(formData);
        setNotes(data);
    }

    const getModalListObject = async (id) => {
        const {data} = await getNote(id);
        setOne(data);
        setShow(true);
    }

    const deleteNoteFunction = async (id) => {
        try {
            await deleteNote(id);
            toast.success('Grade information deleted');
        }
        catch (e) {
            toast.error('Failed to delete note');
        }
    }

    return(
        <div>
            <div className="arrow-icon p-2" style={{cursor: "pointer"}}>
                <a href={"/home"}><i className="bi bi-arrow-left text-light h3 pull-left"></i></a>
            </div>
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3 w-25">
                    <input type="text" className="form-control" placeholder="Filter Name And Surname" aria-label="Name And Surname"
                           aria-describedby="basic-addon1" id="nameandsurname"
                           onChange={(e) => getAllListName(e.target.value)}/>
                </div>
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
                    {notes.map((note, index) => (
                        <tr key={index}>
                            <th scope="row">{note.id}</th>
                            <td>{note.nameAndSurname}</td>
                            <td>{note.courseName}</td>
                            <td>{note.courseNote}</td>
                            <td><i className="bi bi-view-list text-dark h3 pull-left" style={{cursor: "pointer"}}
                                   onClick={() => getModalListObject(note.id)}></i>
                                <i className="bi bi-file-earmark-x-fill h3 m-lg-4" style={{cursor: "pointer"}}
                                   onClick={() => deleteNoteFunction(note.id)}></i></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Modal show={show} style={{textAlign: "center"}}>
                <Modal.Header closeButton>
                    <Modal.Title>View Grade</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label><i className="bi bi-image-fill h1"></i></Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Id: {one.id}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Name And Surname: {one.nameAndSurname}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Course Name: {one.courseName}</Form.Label>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                            <Form.Label>Course Note: {one.courseNote}</Form.Label>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer/>
        </div>
    )
}
export default List;