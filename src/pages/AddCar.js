import { tab } from '@testing-library/user-event/dist/tab';
import { createRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { Modal, ModalBody, ModalHeader, Button, FormGroup, Input, Label, ModalFooter, Form } from 'reactstrap';

const AddCar = ({onAdded}) => {
    const [modal, setModal] = useState(false);
    const [car, setCar] = useState({});

    // const handleShow = () => {
    //     setModal(!modal)
    // }
    const handleCloseShow = () => {
        setModal(!modal)
    }

    const handlerInput = (e) => {
        const { name, value } = e.target;
        console.log(car);
        setCar({
            ...car,
            [name]: value,
        })
    }
    const handleImageFile = (e) => {
        setCar({
            ...car,
            file: e.target.files && e.target.files.length ? URL.createObjectURL(e.target.files[0]) : car.file,
            image: e.target.files && e.target.files.length ? e.target.files[0].name : car.image,
        })
    }

    const handleSubmitForm = (e) => {
        // e.preventDefault();
        // const fileInput = document.querySelector('#fileupload');
        // const formData = new FormData();
        // formData.append('image', fileInput.files[0]);
        // formData.append('màu', car.màu);
        // formData.append('hãng', car.hãng);
        // formData.append('produced_on', car.produced_on);
        // fetch('http://localhost:8000/api/cars', { method: 'post', body: formData })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //         toogle();
        //         onRedirect();
        //     })

        e.preventDefault();
        const fileInput = document.querySelector('#fileUpload');
        const formData = new FormData();
        formData.append('hãng', car.hãng);
        formData.append('màu', car.màu);
        formData.append('produced_on', car.produced_on);
        formData.append('image', fileInput.files[0]);
    
        axios.post('http://localhost:8000/api/cars', formData)
            .then((response) => {
                console.log(response.data);
                onRedirect();

            })
            .catch(function (error) {
                console.log(error);
            })
         
          
    };
    const onRedirect = () => {
        setCar({});
        handleCloseShow();
        onAdded(false)
    }
    return (
        <div>
            <Button
                color="danger"
                onClick={handleCloseShow}
            >
                ADD A NEW CAR
            </Button>
            <Modal isOpen={modal} toggle={handleCloseShow}
            >

                <ModalHeader toggle={handleCloseShow}>
                    Modal title
                </ModalHeader>

                <ModalBody>
                    <Form onSubmit={handleSubmitForm}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                hang
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="hãng"
                                // value={car.màu}
                                onChange={handlerInput}
                                placeholder="with a placeholder"
                                type="text"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                màu
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="màu"
                                // value={car.hãng}
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
                                id="fileUpload"
                                name="fileUpload"
                                // value={car.image}
                                onChange={handleImageFile}
                                placeholder="with a placeholder"
                                type="file"
                            />
                            <img alt='ts' src={car.file} style={{ with: '10em', height: '100px' }}></img>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">
                                produced_on
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="produced_on"

                                onChange={handlerInput}
                                placeholder="with a placeholder"
                                type="date"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                color="primary"
                                type='submit'
                            >
                                Save
                            </Button>
                            <Button 
                            onClick={handleCloseShow} >
                                Cancel
                            </Button>
                        </FormGroup>
                    </Form>

                </ModalBody>
                <ModalFooter>

                </ModalFooter>

            </Modal>
        </div>
    );
}

export default AddCar;
