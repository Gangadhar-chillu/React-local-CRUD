import React, { useRef } from "react";
import { registerUser } from "../data/user"; // typed import / named import

function Register(props) {

    const fName = useRef();
    const fEmail = useRef();
    const fMobile = useRef();
    const fPass = useRef();

    // submitHandler
    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            name: fName.current.value,
            email: fEmail.current.value,
            mobile: fMobile.current.value,
            password: fPass.current.value
        };
        console.log('new data =', data);
        await registerUser(data);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-center">Register</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-2">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" ref={fName} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                  <label htmlFor="email">Email</label>
                                  <input type="email" name="email" id="email" ref={fEmail} className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" ref={fMobile} id="mobile" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" ref={fPass} id="password" className="form-control" required />
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="Register" className="btn btn-outline-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register