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
   
            <form action="" id="form">
                <div class="column one">
                <h3>FORM THÊM MỚI XE</h3>
                    <div class="field username">
                        <label for="Username_">Username</label>
                        <input type="text" name="Username" id="Username_" placeholder="type your name in english only" required/>
                    </div>
                    <div class="field password">
                        <label for="Password_">password</label>
                        <input type="password" name="password" id="Password_" placeholder="type a complex password" required/>
                    </div>
                    <div class="field email">
                        <label for="Email_">email</label>
                        <input type="email" name="email" id="Email_"  placeholder="type a valid email" required/>
                    </div>
                </div>
                <div class="column two">
                    <div class="field phone">
                        <label for="Phone_">phone</label>
                        <input type="tel" name="phone" id="Phone_"/>
                    </div>
                    <div class="field Brief">
                        <label for="Brief_">brief</label>
                        <textarea></textarea>
                    </div>
                </div>
                <input type="submit" value="register" class="register"/>
            </form>
        </div>
    </>
);
}
export default AddCar;
