import { tab } from '@testing-library/user-event/dist/tab';
import { createRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table } from 'reactstrap';
import React, { Component } from 'react';
import axios from axios;
import { Modal, ModalBody, ModalHeader, Button, FormGroup, Input, Label, ModalFooter } from 'reactstrap';
const AddCar = (props) => {
    const [modal, setModal] = useState(false);
    const [car, setCar] = useState({});
    const toogle = () => {
        setModal(!modal);
    }



    const handlerInput = (e) => {
        const { name, value } = e.target;
        console.log(car);
        setCar({
            ...car,
            file: e.target.files && e.target.files.length ? URL.createObjectURL(e.target.files[0]) : car.file,
            image: e.target.files && e.target.files.length ? e.target.files[0].name : car.image,
            [name]: value,
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/cars', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <Button
                color="danger"
                onClick={toogle}
            >
                ADD A NEW CAR
            </Button>
            <Modal isOpen={modal} toggle={toogle}

            >
                <ModalHeader toggle={toogle}>
                    Modal title
                </ModalHeader>
                <ModalBody>
                    {/* <Form onSubmit={onSubmit}> */}
                    <FormGroup>
                        <Label for="exampleEmail">
                            màu
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="màu"
                            value={car.màu}
                            onChange={handlerInput}
                            placeholder="with a placeholder"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            hãng
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="hãng"
                            value={car.hãng}
                            onChange={handlerInput}
                            placeholder="with a placeholder"
                            type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            image
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="image"
                            value={car.image}
                            onChange={handlerInput}
                            placeholder="with a placeholder"
                            type="file"
                        />
                        <img alt='ts' src={car.file}></img>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            produced_on
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="produced_on"
                            value={car.produced_on}
                            onChange={handlerInput}
                            placeholder="with a placeholder"
                            type="date"
                        />
                    </FormGroup>
                    {/* </Form> */}
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                        onClick={handleSubmitForm}
                    >
                        Save
                    </Button>

                    <Button onClick={toogle} >
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default AddCar;
