import axios from "axios";
import React from "react";
import { Table } from 'reactstrap';
import { useEffect, useState } from "react";

// import { Table } from 'reactstrap';

const Quantity = () => {
  const [quantity, setQuantity] = useState();
  const getQuantity = () => {
    axios
      .get("http://localhost:8000/api/category_id")
      .then(function (res) {
        setQuantity(res.data.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };
  useEffect(() => {
    getQuantity();
  }, []);
  return(
<>
<br></br>
                <br></br>
                <h1>SỐ LƯỢNG THỐNG KÊ</h1>
                <Table dark>
                    <thead>
                        <tr>
                            <td>
                               STT
                            </td>
                            <td>
                                TÊN MÓN ĂN
                            </td>
                            <td>
                                SỐ LƯỢNG
                            </td>
                        </tr>
                    </thead>


                    <tbody>
                    {!!quantity ? (
              quantity.map((qua, index) => (
                        <tr  key={index}>
                            <td>
                            {index+1}
                            </td>
                            <td>
                            {qua.hãng}
                            </td>
                           <td> {qua.quantity}</td>
                        </tr>
                         ))
                         ) : (
                           <tr>
                             <td>No data for displaying</td>
                           </tr>
                         )}
                    </tbody>
                </Table>
</>
  )
}
export default Quantity;