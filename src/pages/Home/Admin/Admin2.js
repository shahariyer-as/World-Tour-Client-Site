// import React from "react";
// import { useState, useEffect } from "react";
// import { Table } from "react-bootstrap";
// const Admin = () => {
//     const [traveler, setTraveler] = useState([]);

//     const [control, setControl] = useState(false);

//     useEffect(() => {
//         fetch("https://grisly-zombie-69208.herokuapp.com/allBookings")
//             .then((res) => res.json())
//             .then((data) => setTraveler(data));
//     }, [control]);

//     const handleDelete = (id) => {
//         fetch(`https://grisly-zombie-69208.herokuapp.com/${id}`, {
//             method: "DELETE",
//             headers: { "content-type": "application/json" },
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.deletedCount) {
//                     alert('Delete the user data');
//                     setControl(!control);
//                 } else {
//                     setControl(false);
//                 }
//             });
//         console.log(id);
//     };

//     return (
//         <div className="container">
//             <h1 className="m-2" style={{ color: '#e0ab1a' }}>Traveler {traveler?.length}</h1>
//             <Table className=" table table-striped" striped bordered hover>
//                 <thead>
//                     <tr className="bg-danger">
//                         <th>No</th>
//                         <th>Tourist Name</th>
//                         <th>Email</th>
//                         <th>Booking Date</th>
//                         <th>Unsubscribe</th>
//                     </tr>
//                 </thead>
//                 {traveler?.map((travel, index) => (
//                     <tbody key={travel._id} >
//                         <tr ><td >{index}</td>
//                             <td>{travel.name}</td>
//                             <td>{travel.email}</td>
//                             <td>{travel.date}</td>
//                             <button
//                                 onClick={() => handleDelete(travel._id)}
//                                 className="btn custom-btn  btn-primary p-2"
//                             >
//                                 Delete
//                             </button>
//                         </tr>
//                     </tbody>
//                 ))}
//             </Table>
//         </div>
//     );
// };

// export default Admin;
