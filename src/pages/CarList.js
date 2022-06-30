import { tab } from '@testing-library/user-event/dist/tab';
// import React, { useEffect } from 'react';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { StyleListCar } from './../css/StyleListCar.css';
import AddCar from './AddCar';


// const axios = require('axios');



const CarList = (props) => {
    const [cars, setCars] = useState([]);
    const getCars = () => {
        // Make a request for a user with a given ID
        axios.get('http://localhost:8000/api/cars')
            .then(function (response) {                
                // handle success
                console.log(response);
                setCars(response.data.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

useEffect(() =>{
    getCars()
},[])
    return (
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-xs-5">
                            <h2>Admin <b>ListCar</b></h2>
                        </div>
                        <div class="col-xs-7">
                            <a href="{<AddCar>}" class="btn btn-primary"><i
                                class="material-icons">&#xE147;</i><span>Add New User</span></a>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh</th>

                            <th>Hãng xe</th>
                            <th>Màu xe</th>
                            {/* <th>Tên nsx</th> */}
                            <th>NSX</th>
                            <th>Công cụ</th>
                        </tr>
                    </thead>
                   
                    <tbody>
                        {cars.length !== 0
                        ?
                     cars.map((car,index)=>
                   
                        <tr key={index}>
                            <td>{car.id}</td>
                            <td><a href="#">
                                <img  width="100px"
                                height="100px" class="avatar" src={`http://localhost:8000/img/${car.image}`} alt="Avatar" /></a></td>
 {/* console.log(1111);  */}
                            <td>{car.hãng}</td>
                            <td>{car.màu}</td>
                            <td>{car.produced_on}</td>
                            {/* <td>{car.id}</td> */}
                            <td>
                                <a href="" class="settings" title="EDIT"
                                    data-toggle="tooltip"><i class="material-icons">&#xE8B8;</i></a>
                                <button type="submit" onclick="return confirm('chắc chắn bạn muons xóa không')"
                                    class="settings" title="delete" data-toggle="tooltip"><i
                                        class="material-icons">&#xE5C9;</i>
                                </button>
                            </td>
                        </tr>
                )
                :
                <tr>
                    <td>{'No data in database'}</td>
                    
                </tr> }

                    </tbody>
               
                </table>

            </div>
        </div>
    );
}

export default CarList;