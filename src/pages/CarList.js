
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { StyleListCar } from './../css/StyleListCar.css';
import AddCar from './AddCar';
import EditCar from './EditCar.js';
import { Button, CardText, CardTitle, Card, Col, Row, Container, CardImg } from 'reactstrap';

const CarList = (props) => {
    const [cars, setCars] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false)
    const getCars = () => {

        // Make a request for a user with a given ID
        axios.get('http://localhost:8000/api/cars')
            .then(function (response) {
                // handle success
                console.log(response);
                setCars(response.data.data)
                setIsLoaded(true)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }


    //bắt đầu làm cho EditCar.js
    const [editmodal, setEditModal] = useState(false);
    const [search, setSearch] = useState();
    // const [timkiemgia, setTimkiemgia] = useState();
    const [editCarData, setEditCarData] = useState({
        id: "",
        hãng: "",
        màu: "",
        produced_on: "",
        // manufacturer:"",
        image: ""
    });  //editCarData là 1 mảng các đối tượng lưu dữ liệu đối tượng Car được edit
    //hàm này nhận biến car ở sự kiện onClick() của nút Sửa
    const toggleEditModal = (car) => {
        setEditModal(!editmodal);
        if (editmodal === false) setEditCarData(car);  //phải có kiểm tra điều kiện form edit được mở thì mới cập nhật không thì sẽ lỗi không nhận ra editCarData.manufacturer.id khi đóng form
        console.log(editCarData);
    }

    //tham số car này là tham số đầu vào
    const deleteCar = (id) => {
        axios.delete('http://localhost:8000/api/cars/' + id)  //tham số truyền vào là id
            .then((res) => {
                console.log("Car removed deleted");
                getCars();
            }).catch((error) => {
                console.log(error)
            })
    }//đóng delete

    useEffect(() => {
        if (!isLoaded) getCars();
    }, [isLoaded])

    const handleSearch = async (e, search) => {
        const res = await axios.get(`http://127.0.0.1:8000/api/show?search=${search}`);
        // const carList = await res.data;

        setCars(res.data.data);

    }

    // import axios from "axios";
    // import AddCar from './AddCar';
    // import EditCar from './EditCar';


    // const CarList = () => {
    //     // const [isLoaded,setIsLoaded]= useState(false)
    //     const [cars, setCars] = useState([{
    //         id: "",
    //         hãng: "",
    //         màu: "",
    //         produced_on: "",
    //         image: ""
    //     }]);  //cars là 1 mảng các đối tượng
    //     const [noDataFound, setNoDataFound] = useState("");

    //     //gọi hàm này khi CarList được render lần đầu (chú ý tham số thứ 2 là mảng rỗng). Hàm này như hàm lifecycle componentDidMount()
    //     useEffect(() => {
    //         getCars();
    //         //             if (!isLoaded) getCars();
    //         // },[isLoaded]
    //         //console.log("hello carlist");
    //     }, []);

    //     //cập nhật lại state cars
    //     const getCars = () => {
    //         axios.get('http://localhost:8000/api/cars').then((res) => {
    //             console.log(res.data);
    //             if (res.status === 200) {
    //                 setCars(res.data.data ? res.data.data : []); //c là biến tự đặt tên gì cũng đc, ko có nó thì in ra cars=[]
    //                 console.log(res.data.data ? res.data.data : []);
    //                 console.log(cars);//vì cars lúc này chỉ render 
    //                 // setIsLoaded(true)
    //             };
    //             if (res.data.status === "failed" && res.data.success === false) {
    //                 setNoDataFound(res.data.message);
    //                 console.log(noDataFound);
    //             };
    //         }).catch((error) => {
    //             console.log(error);
    //         });
    //     };

    //     //bắt đầu làm cho EditCar.js
    //     const [editmodal, setEditModal] = useState(false);

    //     const [editCarData, setEditCarData] = useState({
    //         id: "",
    //         hãng: "",
    //         màu: "",
    //         produced_on: "",
    //         // manufacturer:"",
    //         image: ""
    //     });

    //     //editCarData là 1 mảng các đối tượng lưu dữ liệu đối tượng Car được edit
    //     //hàm này nhận biến car ở sự kiện onClick() của nút Sửa
    //     const toggleEditModal = (car) => {
    //         setEditModal(!editmodal);
    //         if (editmodal === false) setEditCarData(car);  //phải có kiểm tra điều kiện form edit được mở thì mới cập nhật không thì sẽ lỗi không nhận ra editCarData.manufacturer.id khi đóng form
    //         console.log(editCarData);
    //     }
    //     //tham số car này là tham số đầu vào
    //     const deleteCar = (id) => {
    //         axios.delete('http://localhost:8000/api/cars' + id)  //tham số truyền vào là id
    //             .then((res) => {
    //                 console.log("Car removed deleted");
    //                 getCars();
    //             }).catch((error) => {
    //                 console.log(error)
    //             })
    //     }

    //đóng delete

    return (
        // <div className="table-responsive">
        //     <h2>Search theo hãng xe </h2>
        //     <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
        //     <button type='button' onClick={(e) => handleSearch(e,search)}>Search</button>
        //     <div className="table-wrapper">
        //         <div className="table-title">
        //             <div className="row">
        //                 <div className="col-xs-5">
        //                     <h2>Admin <b>ListCar</b></h2>
        //                     {/* <AddCar onAdded={setIsLoaded}/> */}
        //                     <AddCar onAdded={setIsLoaded}></AddCar>
        //                     {/* <AddCar getCars={getCars} /> */}
        //                     {/* <Link to="/cars/add"><Button color="primary">Add car page</Button></Link> */}

        //                     <EditCar cars={cars} setCars={setCars} getCars={getCars} toggleEditModal={toggleEditModal} editmodal={editmodal} editCarData={editCarData} setEditCarData={setEditCarData} />
        //                 </div>

        //             </div>
        //         </div>
        //         <table className="table table-striped table-hover">
        //             <thead>
        //                 <tr>
        //                     <th>ID</th>
        //                     <th>Ảnh</th>
        //                     <th>TÊN</th>
        //                     <th>GIÁ</th>
        //                     <th>NSX</th>
        //                     <th>Công cụ</th>
        //                 </tr>
        //             </thead>

        //             <tbody>
        //                 {cars.length !== 0
        //                     ?
        //                     cars.map((car, index) =>

        //                         <tr key={index}>
        //                             <td>{car.id}</td>
        //                             <td><a href="#">
        //                                 <img width="100px"
        //                                     height="100px" className="avatar" src={`http://localhost:8000/img/${car.image}`} alt="Avatar" /></a></td>
        //                             <td>{car.hãng}</td>
        //                             <td>{car.màu}</td>
        //                             <td>{car.produced_on}</td>

        //                             <td>
        //                                 <button title="EDIT"
        //                                     data-toggle="tooltip" onClick={() => toggleEditModal(car)}>
        //                                     <i className="material-icons">&#xE8B8;</i>

        //                                 </button>
        //                                 <button type="submit"
        //                                     className="settings"
        //                                     title="delete"
        //                                     data-toggle="tooltip"
        //                                     onClick={() => { if (window.confirm('Bạn có chắc chắn xóa?')) deleteCar(car.id) }}
        //                                 > <i
        //                                     className="material-icons">&#xE5C9;</i>
        //                                 </button>
        //                             </td>
        //                         </tr>
        //                     )
        //                     :
        //                     <tr>
        //                         <td>{'No data in database'}</td>

        //                     </tr>}

        //             </tbody>

        //         </table>

        //     </div>
        // </div>
        <>
            <div style={{ padding: '30px' }}>
                <br></br>
                <br></br>
                <h2>Tìm kiếm</h2>
                <h6>Nhập tên : </h6>
                <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
                {/* <button type='button' onClick={(e) => handleSearch(e, search)}>Search</button> */}
                <h6>Nhập giá : </h6>
                <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} />
                <br></br>
                <br></br>
                <button type='button' onClick={(e) => handleSearch(e, search)}>Search</button>
                <br></br>
                <br></br>
                {/* <h3>Số lượng thông kê</h3>
                <table className='table table-striped table-hover'>
                    <thead>
                        <tr>
                            <th>Loại Món</th>
                            <th>Số Lượng</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>

                        </tr>
                    </tbody>
                </table> */}
            </div>

            <Container
                // className="bg-light border"
                fluid="xl"
            >

                <Row >
                    {cars.length !== 0
                        ?
                        cars.map((car, index) =>
                            <Col sm="4" key={index}>
                                <Card body>
                                    <CardTitle tag="h5">
                                        {car.hãng}
                                    </CardTitle>
                                    <CardImg
                                        alt="Card image cap"
                                        src={`http://localhost:8000/img/${car.image}`}
                                        top
                                        // width="100%"
                                        className="avatar"
                                        // width='100px'
                                        height='200px'
                                    />
                                    <CardText
                                    >
                                        Gía : {car.màu} ngàn đồng
                                    </CardText>
                                    <CardText
                                    >
                                        Ngày sản xuất:
                                        {car.produced_on}
                                    </CardText>
                                    <Button>
                                        MUA
                                    </Button>
                                </Card>
                                <br></br>
                            </Col>

                        ) :
                        <div> NO database.</div>
                    }
                </Row>
                <br></br>
                <br></br>
                <h1>SỐ LƯỢNG THỐNG KÊ</h1>
                <Table dark>
                    <thead>
                        <tr>
                            <td>
                                Tên Món
                            </td>
                            <td>
                                Số Lượng
                            </td>
                            <td>
                                ghi chú
                            </td>
                        </tr>
                    </thead>


                    <tbody>
                        {cars.length !== 0
                            ?
                            cars.map((car, index) =>
                                <tr key={index}>
                                    <td><a href="#">
                                        <img width="100px"
                                            height="100px" className="avatar" src={`http://localhost:8000/img/${car.image}`} alt="Avatar" /></a></td>
                                    <td>{car.hãng}</td>
                                    <td>{car.id}</td> 
                                </tr>
                            )
                            :
                            <tr>
                                <td>{'No data in database'}</td>

                            </tr>}

                    </tbody>
                </Table>
            </Container>
        </>



    );
}

export default CarList;