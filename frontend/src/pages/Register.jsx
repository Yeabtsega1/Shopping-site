// import React, { useState } from "react";
// import { Footer, Navbar } from "../components";
// import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
// const Register = () => {
//     const [fullname, setfullName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//    const [updateFormData] = React.useState([]);
//    const navigate=useNavigate();

//     let Submit=(e)=>{
//         e.preventDefault();
//         const newEntry ={
//             fullname:fullname,
//             email:email,
//             password:password
//         }
       
//         updateFormData([newEntry])
//        // console.log(formData)
//        if(fullname==='' || email==='' || password==='') return window.alert("Please fill out the field first")
//             const params={
//             method:'post',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify(newEntry)
//         }
//         fetch("http://localhost:5000/api/register",params).then((res)=>{
//             return res.json()
//         }).then((data)=>{
//             console.log(data);
//             window.alert("Registration successful");
//             navigate('/login')
//         })       
//      }
//     return (
//         <>
//             <Navbar />
//             <div className="container my-3 py-3">
//                 <h1 className="text-center">Register</h1>
//                 <hr />
//                 <div className="row my-4 h-100">
//                     <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//                         <form onSubmit={Submit}>
//                             <div className="form my-3">
//                                 <label htmlFor="Name">Full Name</label>
//                                 <input value={fullname} onChange={(e)=>{setfullName(e.target.value)}} type="fullname" placeholder="Enter your Full name" />
//                             </div>
//                             <div className="form my-3">
//                                 <label htmlFor="Email">Email address</label>
//                                 <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Enter your email"  />
//                             </div>
//                             <div className="form  my-3">
//                                 <label htmlFor="Password">Password</label>
//                                 <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Enter your password" />
//                             </div>
//                             <div className="my-3">
//                                 <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
//                             </div>
//                             <div className="text-center">
//                                 <button className="my-2 mx-auto btn btn-dark">
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <Footer />
//         </>
//     )
// }

// export default Register


import React, { useState } from "react";
import { Footer } from "../components";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [fullname, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        const newEntry = {
            fullname: fullname,
            email: email,
            password: password
        };

        if (fullname === '' || email === '' || password === ''){
            return window.alert("Please fill out all the fields first");
        }
        // const backendUrl = process.env.REACT_APP_BACKEND_URL;
        // const url = `${backendUrl}/api/register`;
        const params = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEntry)
        };

        fetch("https://yb-ecommerce-backend.onrender.com/api/register", params)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                window.alert("Registration successful");
                navigate('/login');
            })
            .catch((error) => {
                console.error(error);
                window.alert("Error occurred during registration");
            });
    };

    return (
        <>
            
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={Submit}>
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    value={fullname}
                                    onChange={(e) => setfullName(e.target.value)}
                                    type="fullname"
                                    placeholder="Enter your Full name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark">
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
