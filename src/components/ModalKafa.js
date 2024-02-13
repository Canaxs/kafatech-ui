import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createNote} from "../api/apiCalls";
import {toast, ToastContainer} from "react-toastify";


const ModalKafa = (props) => {

    const [formData, setFormData] = useState({
        Id: "",
        nameAndSurname: "",
        courseName: "",
        courseNote: ""
    });

    const handleClose = () => props.setShow(false);

    const saveChanges = async () => {
        try {
            await createNote(formData);
            toast.success('Grade information created');
        }
        catch (e) {
            toast.error('Failed to create note');
        }
    }

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [key]: value})
    }

    return(
        <div>
                <Modal show={props.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Grade</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name and Surname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name and Surname"
                                    name="nameAndSurname"
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Course Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Course Name"
                                    name="courseName"
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                <Form.Label>Course Note</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Course Note"
                                    name="courseNote"
                                    onChange={handleChange}
                                    autoFocus
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={saveChanges}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            <ToastContainer />
        </div>
    )
}
export default ModalKafa;