import { tab } from '@testing-library/user-event/dist/tab';
import { createRef } from 'react';
// import React, { useEffect } from 'react';
import {FormCssListCar} from './../css/FormCssListCar.css';
// import { StyleListCar } from './../css/StyleListCar.css';
import { Table } from 'reactstrap';
import React, { Component } from 'react';



const AddCar = (props) =>{
//     const [cars, setCars] = useState([]);
//     const getCars = () => {
//         // Make a request for a user with a given ID
//         axios.get('http://localhost:8000/api/cars')
//             .then(function (response) {                
//                 // handle success
//                 console.log(response);
//                 setCars(response.data.data)
//             })
//             .catch(function (error) {
//                 // handle error
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });
//     }

// useEffect(() =>{
//     getCars()
// },[])
return (
    <>
    <div class="container">
        <center>   <h3>FORM THÊM MỚI XE</h3></center>
 
            <form action="" id="form">
       
                <div class="column one">
               
                    <div class="field username">
                        <label for="Username_">Hinh anh</label>
                        <input type="file" name="image"  id="Username_" placeholder="hinh anh" required/>
                    </div>
                    <div class="field password">
                        <label for="Password_">hang xe</label>
                        <input type="text"name="hãng" id="Password_" placeholder="type a complex password" required/>
                    </div>
                    <div class="field email">
                        <label for="Email_">mau xe</label>
                        <input type="text" name="màu" id="Email_"  placeholder="type a valid email" required/>
                    </div>
                </div>
                <div class="column two">
                    <div class="field phone">
                        <label for="Phone_">nha sx</label>
                        <input type="tel" name="phone" id="Phone_"/>
                    </div>
                    <div class="field Brief">
                        <label for="Brief_">ngay sx</label>
                        <input  type="date"></input>
                    </div>
                </div>
                <input type="submit" value="Submit" class="register"/>
            </form>
        </div>
    </>
);
}
export default AddCar;
